/**
 * Rythu Mitra - Main Farmer Portal JavaScript
 * Handles dynamic interactions, language switching, location dropdowns,
 * search and filtering, land eligibility evaluations, modals, and toasts.
 */

// Application State
let currentLang = localStorage.getItem('rythu_mitra_lang') || 'en';
let currentSearchCriteria = {
  state: '',
  district: '',
  village: '',
  land: null
};
let currentActiveFilterTab = 'all';
let currentSearchKeyword = '';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initLocationDropdowns();
  initFarmerForm();
  initSearchAndFilters();
  initContactForm();
  initBackToTop();
  
  // Render initial schemes
  renderSchemes();

  // Listen for storage / cross-tab / admin updates
  window.addEventListener('schemesUpdated', () => {
    renderSchemes();
  });

  window.addEventListener('storage', (e) => {
    if (e.key === 'rythu_mitra_schemes') {
      renderSchemes();
    }
    if (e.key === 'rythu_mitra_lang') {
      setLanguage(e.newValue || 'en');
    }
  });

  // Re-render schemes when language is toggled
  window.addEventListener('languageChanged', (e) => {
    currentLang = e.detail.lang;
    updateActiveProfilePill();
    renderSchemes();
  });
});

/* ==========================================================================
   Language Management
   ========================================================================== */
function initLanguage() {
  currentLang = localStorage.getItem('rythu_mitra_lang') || 'en';
  applyTranslations(currentLang);

  // Bind all language switch buttons
  document.querySelectorAll('.lang-btn, .lang-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!['en', 'te', 'hi'].includes(lang)) return;
  currentLang = lang;
  applyTranslations(lang);
}

/* ==========================================================================
   State & District Dropdowns
   ========================================================================== */
function initLocationDropdowns() {
  const stateSelect = document.getElementById('farmer-state');
  const districtSelect = document.getElementById('farmer-district');

  if (!stateSelect || !districtSelect) return;

  // Populate States
  stateSelect.innerHTML = `<option value="">${t('select_state_placeholder')}</option>`;
  Object.keys(INDIAN_STATES_DISTRICTS).sort().forEach(stateName => {
    const opt = document.createElement('option');
    opt.value = stateName;
    opt.textContent = stateName;
    stateSelect.appendChild(opt);
  });

  // Default District state
  districtSelect.innerHTML = `<option value="">${t('select_district_placeholder')}</option>`;
  districtSelect.disabled = true;

  // When State changes, populate Districts
  stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    districtSelect.innerHTML = `<option value="">${t('select_district_placeholder')}</option>`;

    if (selectedState && INDIAN_STATES_DISTRICTS[selectedState]) {
      districtSelect.disabled = false;
      const districts = INDIAN_STATES_DISTRICTS[selectedState];
      districts.forEach(dist => {
        const opt = document.createElement('option');
        opt.value = dist;
        opt.textContent = dist === 'All Districts' ? t('all_districts') : dist;
        districtSelect.appendChild(opt);
      });
    } else {
      districtSelect.disabled = true;
    }
  });
}

/* ==========================================================================
   Farmer Form Handling & Search
   ========================================================================== */
function initFarmerForm() {
  const form = document.getElementById('farmer-scheme-form');
  const resetBtn = document.getElementById('btn-reset-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFarmerSearch();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearFarmerForm();
    });
  }
}

function handleFarmerSearch() {
  const stateSelect = document.getElementById('farmer-state');
  const districtSelect = document.getElementById('farmer-district');
  const villageInput = document.getElementById('farmer-village');
  const landInput = document.getElementById('farmer-land');

  const state = stateSelect.value.trim();
  const district = districtSelect.value.trim();
  const village = villageInput.value.trim();
  const landVal = landInput.value.trim();
  const land = parseFloat(landVal);

  let hasError = false;

  // Validation
  if (!state) {
    showInputError(stateSelect, t('validation_state_req'));
    hasError = true;
  } else {
    clearInputError(stateSelect);
  }

  if (!district) {
    showInputError(districtSelect, t('validation_district_req'));
    hasError = true;
  } else {
    clearInputError(districtSelect);
  }

  if (!village) {
    showInputError(villageInput, t('validation_village_req'));
    hasError = true;
  } else {
    clearInputError(villageInput);
  }

  if (isNaN(land) || land <= 0) {
    showInputError(landInput, t('validation_land_req'));
    hasError = true;
  } else {
    clearInputError(landInput);
  }

  if (hasError) {
    showToast(t('form_err_req'), 'warning');
    return;
  }

  // Update application state
  currentSearchCriteria = {
    state,
    district,
    village,
    land
  };

  updateActiveProfilePill();
  renderSchemes();

  // Smooth scroll to scheme results
  const resultsSection = document.getElementById('schemes-results-section');
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`${t('schemes_found').replace('{count}', '')} - Results updated!`, 'success');
}

function clearFarmerForm() {
  const form = document.getElementById('farmer-scheme-form');
  if (form) form.reset();

  const districtSelect = document.getElementById('farmer-district');
  if (districtSelect) {
    districtSelect.innerHTML = `<option value="">${t('select_district_placeholder')}</option>`;
    districtSelect.disabled = true;
  }

  // Clear errors
  document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  document.querySelectorAll('.invalid-feedback-text').forEach(el => el.remove());

  // Reset search criteria
  currentSearchCriteria = {
    state: '',
    district: '',
    village: '',
    land: null
  };

  currentSearchKeyword = '';
  const searchInput = document.getElementById('scheme-search-input');
  if (searchInput) searchInput.value = '';

  updateActiveProfilePill();
  renderSchemes();
}

function showInputError(element, message) {
  element.classList.add('is-invalid');
  let errDiv = element.parentElement.querySelector('.invalid-feedback-text');
  if (!errDiv) {
    errDiv = document.createElement('div');
    errDiv.className = 'invalid-feedback-text text-danger small mt-1';
    element.parentElement.appendChild(errDiv);
  }
  errDiv.textContent = message;
}

function clearInputError(element) {
  element.classList.remove('is-invalid');
  const errDiv = element.parentElement.querySelector('.invalid-feedback-text');
  if (errDiv) {
    errDiv.remove();
  }
}

function updateActiveProfilePill() {
  const pill = document.getElementById('active-profile-pill');
  if (!pill) return;

  if (currentSearchCriteria.state && currentSearchCriteria.land !== null) {
    const formatted = t('schemes_for_farmer')
      .replace('{state}', currentSearchCriteria.state)
      .replace('{district}', currentSearchCriteria.district)
      .replace('{village}', currentSearchCriteria.village)
      .replace('{land}', currentSearchCriteria.land);

    pill.innerHTML = `<i class="fas fa-map-marker-alt text-success me-1"></i> ${formatted}`;
    pill.classList.remove('d-none');
  } else {
    pill.classList.add('d-none');
  }
}

/* ==========================================================================
   Filter Toolbar & Search Input
   ========================================================================== */
function initSearchAndFilters() {
  // Filter tabs
  const tabButtons = document.querySelectorAll('.filter-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentActiveFilterTab = btn.getAttribute('data-filter-type') || 'all';
      renderSchemes();
    });
  });

  // Keyword search input (debounced or real-time)
  const searchInput = document.getElementById('scheme-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchKeyword = e.target.value;
      renderSchemes();
    });
  }

  // Browse all schemes button in hero
  const browseAllBtn = document.getElementById('btn-browse-all');
  if (browseAllBtn) {
    browseAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearFarmerForm();
      const resultsSection = document.getElementById('schemes-results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* ==========================================================================
   Scheme Rendering Engine
   ========================================================================== */
function renderSchemes() {
  const container = document.getElementById('schemes-grid-container');
  const counterElement = document.getElementById('schemes-count-badge');
  const emptyStateElement = document.getElementById('empty-state-container');

  if (!container) return;

  // Filter schemes
  const filteredSchemes = filterSchemes({
    state: currentSearchCriteria.state,
    district: currentSearchCriteria.district,
    village: currentSearchCriteria.village,
    keyword: currentSearchKeyword,
    filterType: currentActiveFilterTab
  });

  // Update count badge
  if (counterElement) {
    counterElement.textContent = t('schemes_found').replace('{count}', filteredSchemes.length);
  }

  // Handle empty state
  if (filteredSchemes.length === 0) {
    container.innerHTML = '';
    if (emptyStateElement) emptyStateElement.classList.remove('d-none');
    return;
  }

  if (emptyStateElement) emptyStateElement.classList.add('d-none');

  // Render cards
  container.innerHTML = filteredSchemes.map(scheme => createSchemeCardHtml(scheme)).join('');

  // Attach event listeners to "View Full Details" buttons
  container.querySelectorAll('.btn-view-scheme-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const schemeId = btn.getAttribute('data-scheme-id');
      openSchemeDetailsModal(schemeId);
    });
  });
}

function createSchemeCardHtml(scheme) {
  const lang = currentLang;

  // Localized texts
  const name = (scheme.name && scheme.name[lang]) || scheme.name.en || 'Government Scheme';
  const desc = (scheme.description && scheme.description[lang]) || scheme.description.en || '';

  // Land evaluation
  let landBadgeHtml = '';
  const landEval = evaluateLandCriteria(currentSearchCriteria.land, scheme);
  if (landEval.isEvaluated) {
    if (landEval.isEligible) {
      landBadgeHtml = `
        <div class="land-indicator-badge eligible">
          <i class="fas fa-check-circle"></i>
          <span>${t('badge_land_eligible')} (${landEval.farmerLand} ${t('acres')})</span>
        </div>`;
    } else {
      const maxText = scheme.maxLand >= 900 ? t('label_land_unlimited') : `${scheme.maxLand} ${t('acres')}`;
      landBadgeHtml = `
        <div class="land-indicator-badge mismatch">
          <i class="fas fa-exclamation-triangle"></i>
          <span>${t('badge_land_mismatch').replace('{min}', scheme.minLand).replace('{max}', maxText)}</span>
        </div>`;
    }
  }

  // Scope badge
  let scopeBadge = '';
  if (scheme.state === 'All') {
    scopeBadge = `<span class="badge-scope badge-nationwide-style"><i class="fas fa-flag-checkered me-1"></i> ${t('badge_nationwide')}</span>`;
  } else if (scheme.district === 'All' || scheme.district === 'All Districts') {
    scopeBadge = `<span class="badge-scope badge-state-style"><i class="fas fa-map me-1"></i> ${scheme.state}</span>`;
  } else {
    scopeBadge = `<span class="badge-scope badge-district-style"><i class="fas fa-map-pin me-1"></i> ${scheme.district}, ${scheme.state}</span>`;
  }

  const categoryBadge = scheme.category 
    ? `<span class="badge-category"><i class="fas fa-tag me-1"></i> ${scheme.category}</span>`
    : '';

  const maxLandDisplay = scheme.maxLand >= 900 ? t('label_land_unlimited') : `${scheme.maxLand} ${t('acres')}`;

  return `
    <div class="scheme-card">
      <div class="scheme-card-header">
        <div class="scheme-tags-row">
          ${scopeBadge}
          ${categoryBadge}
        </div>
        ${landBadgeHtml}
        <h3 class="scheme-card-title" title="${escapeHtml(name)}">${escapeHtml(name)}</h3>
      </div>
      <div class="scheme-card-body">
        <p class="scheme-desc-text">${escapeHtml(desc)}</p>
        <div class="scheme-info-strip">
          <div class="info-strip-item">
            <span class="info-strip-label">${t('label_min_land')}</span>
            <span class="info-strip-val">${scheme.minLand} ${t('acres')}</span>
          </div>
          <div class="info-strip-item">
            <span class="info-strip-label">${t('label_max_land')}</span>
            <span class="info-strip-val">${maxLandDisplay}</span>
          </div>
        </div>
      </div>
      <div class="scheme-card-footer">
        <button type="button" class="btn-card-details btn-view-scheme-details" data-scheme-id="${scheme.id}">
          <i class="fas fa-info-circle me-1"></i> ${t('btn_view_details')}
        </button>
        ${scheme.officialUrl ? `
          <a href="${escapeHtml(scheme.officialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-card-apply" title="${t('btn_apply_official')}">
            <span>${t('btn_apply_official')}</span>
            <i class="fas fa-external-link-alt ms-1"></i>
          </a>` : ''}
      </div>
    </div>
  `;
}

/* ==========================================================================
   Scheme Details Modal
   ========================================================================== */
function openSchemeDetailsModal(schemeId) {
  const scheme = getSchemeById(schemeId);
  if (!scheme) return;

  const modalEl = document.getElementById('schemeDetailsModal');
  if (!modalEl) return;

  const lang = currentLang;

  const name = (scheme.name && scheme.name[lang]) || scheme.name.en || 'Government Scheme';
  const desc = (scheme.description && scheme.description[lang]) || scheme.description.en || '';
  const eligibility = (scheme.eligibility && scheme.eligibility[lang]) || scheme.eligibility.en || '';
  const benefits = (scheme.benefits && scheme.benefits[lang]) || scheme.benefits.en || '';
  const documents = (scheme.documents && scheme.documents[lang]) || scheme.documents.en || '';
  const applyProcess = (scheme.applicationProcess && scheme.applicationProcess[lang]) || scheme.applicationProcess.en || '';

  // Title
  document.getElementById('modalSchemeTitle').textContent = name;

  // Overview & Jurisdiction
  const stateDisplay = scheme.state === 'All' ? t('modal_all_india') : scheme.state;
  const districtDisplay = (scheme.district === 'All' || scheme.district === 'All Districts') 
    ? t('modal_all_districts') 
    : scheme.district;
  const villageDisplay = (!scheme.village || scheme.village === 'All') 
    ? t('modal_all_villages') 
    : scheme.village;
  const maxLandText = scheme.maxLand >= 900 ? t('label_land_unlimited') : `${scheme.maxLand} ${t('acres')}`;

  document.getElementById('modalState').textContent = stateDisplay;
  document.getElementById('modalDistrict').textContent = districtDisplay;
  document.getElementById('modalVillage').textContent = villageDisplay;
  document.getElementById('modalLandReq').textContent = `${scheme.minLand} - ${maxLandText}`;

  // Description
  document.getElementById('modalDescription').textContent = desc;

  // Benefits
  document.getElementById('modalBenefits').innerHTML = `<p>${escapeHtml(benefits)}</p>`;

  // Eligibility
  let eligibilityHtml = `<p>${escapeHtml(eligibility)}</p>`;
  if (currentSearchCriteria.land !== null) {
    const evalResult = evaluateLandCriteria(currentSearchCriteria.land, scheme);
    if (evalResult.isEligible) {
      eligibilityHtml += `
        <div class="alert alert-success d-flex align-items-center gap-2 mt-2 py-2">
          <i class="fas fa-check-circle fs-5"></i>
          <div><strong>${t('badge_land_eligible')}</strong>: Your land (${currentSearchCriteria.land} ${t('acres')}) meets the scheme requirement (${scheme.minLand} to ${maxLandText}).</div>
        </div>`;
    } else {
      eligibilityHtml += `
        <div class="alert alert-warning d-flex align-items-center gap-2 mt-2 py-2">
          <i class="fas fa-exclamation-triangle fs-5"></i>
          <div><strong>Notice on Land Criteria</strong>: Your entered land is ${currentSearchCriteria.land} ${t('acres')}, while this scheme is configured for ${scheme.minLand} to ${maxLandText}.</div>
        </div>`;
    }
  }
  document.getElementById('modalEligibility').innerHTML = eligibilityHtml;

  // Documents
  const docsList = documents.split(',').map(d => d.trim()).filter(Boolean);
  if (docsList.length > 0) {
    document.getElementById('modalDocuments').innerHTML = `
      <ul class="mb-0 ps-3">
        ${docsList.map(item => `<li class="mb-1">${escapeHtml(item)}</li>`).join('')}
      </ul>`;
  } else {
    document.getElementById('modalDocuments').textContent = documents;
  }

  // Application Process
  document.getElementById('modalApplyProcess').innerHTML = `<p>${escapeHtml(applyProcess)}</p>`;

  // Official Link Button
  const officialLinkBtn = document.getElementById('modalOfficialLinkBtn');
  if (officialLinkBtn) {
    if (scheme.officialUrl) {
      officialLinkBtn.href = scheme.officialUrl;
      officialLinkBtn.classList.remove('d-none');
    } else {
      officialLinkBtn.classList.add('d-none');
    }
  }

  // Show Bootstrap modal
  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
}

/* ==========================================================================
   Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('farmer-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const query = document.getElementById('contact-query').value.trim();

      if (!name || !phone || !query) {
        showToast(t('form_err_req'), 'warning');
        return;
      }

      showToast(t('contact_success'), 'success');
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('btn-back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `custom-toast border-${type === 'warning' ? 'warning' : (type === 'danger' ? 'danger' : 'success')}`;

  const icon = type === 'warning' ? 'exclamation-circle text-warning' : (type === 'danger' ? 'times-circle text-danger' : 'check-circle text-success');

  toast.innerHTML = `
    <i class="fas fa-${icon} fs-5"></i>
    <div class="flex-grow-1 small fw-semibold text-dark">${escapeHtml(message)}</div>
    <button type="button" class="btn-close btn-sm" aria-label="Close"></button>
  `;

  toast.querySelector('.btn-close').addEventListener('click', () => toast.remove());

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* Helper to escape HTML tags */
function escapeHtml(text) {
  if (typeof text !== 'string') return text || '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
