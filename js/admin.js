/**
 * Rythu Mitra - Admin Portal Management JavaScript
 * Handles client-side authentication, dashboard statistics,
 * scheme creation/editing with multilingual fields (EN, TE, HI),
 * deletion with confirmation, status toggle, and demo data restoration.
 */

const ADMIN_CREDENTIALS = {
  email: "admin@123",
  password: "1234567890"
};

const AUTH_STORAGE_KEY = 'rythu_mitra_admin_auth';

let currentAdminLang = localStorage.getItem('rythu_mitra_lang') || 'en';
let editingSchemeId = null;
let schemeToDeleteId = null;

document.addEventListener('DOMContentLoaded', () => {
  initAdminLanguage();
  checkAuthStatus();
  initLoginForm();
  initDashboard();
  initSchemeModal();
  initDeleteConfirmation();
  initRestoreDefaults();

  // Listen for storage changes across tabs
  window.addEventListener('schemesUpdated', () => {
    refreshAdminDashboard();
  });

  window.addEventListener('languageChanged', (e) => {
    currentAdminLang = e.detail.lang;
    refreshAdminDashboard();
  });
});

/* ==========================================================================
   Admin Language Setup
   ========================================================================== */
function initAdminLanguage() {
  currentAdminLang = localStorage.getItem('rythu_mitra_lang') || 'en';
  applyTranslations(currentAdminLang);

  document.querySelectorAll('.lang-btn, .lang-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        currentAdminLang = lang;
        applyTranslations(lang);
      }
    });
  });
}

/* ==========================================================================
   Authentication System (Demonstration Only)
   ========================================================================== */
function checkAuthStatus() {
  const loginView = document.getElementById('admin-login-view');
  const dashView = document.getElementById('admin-dashboard-view');
  const authSession = localStorage.getItem(AUTH_STORAGE_KEY);

  if (authSession) {
    try {
      const auth = JSON.parse(authSession);
      if (auth.loggedIn && auth.email === ADMIN_CREDENTIALS.email) {
        if (loginView) loginView.classList.add('d-none');
        if (dashView) dashView.classList.remove('d-none');
        refreshAdminDashboard();
        return;
      }
    } catch (e) {
      console.warn("Invalid auth session format");
    }
  }

  // Not logged in
  if (loginView) loginView.classList.remove('d-none');
  if (dashView) dashView.classList.add('d-none');
}

function initLoginForm() {
  const loginForm = document.getElementById('admin-login-form');
  const autoFillBtn = document.getElementById('btn-autofill-demo');
  const emailInput = document.getElementById('admin-email');
  const passInput = document.getElementById('admin-password');

  if (autoFillBtn) {
    autoFillBtn.addEventListener('click', () => {
      if (emailInput) emailInput.value = ADMIN_CREDENTIALS.email;
      if (passInput) passInput.value = ADMIN_CREDENTIALS.password;
      showToast("Credentials auto-filled for testing!", "success");
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const pass = passInput.value.trim();

      if (email === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.password) {
        // Success
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
          loggedIn: true,
          email: email,
          timestamp: Date.now()
        }));

        showToast(t('login_success'), 'success');
        checkAuthStatus();
      } else {
        showToast(t('login_invalid'), 'danger');
      }
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('btn-admin-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem(AUTH_STORAGE_KEY);
      showToast("Logged out successfully.", "info");
      checkAuthStatus();
    });
  }
}

/* ==========================================================================
   Admin Dashboard & Metrics
   ========================================================================== */
function initDashboard() {
  const searchInput = document.getElementById('admin-table-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderAdminTable();
    });
  }

  const stateFilter = document.getElementById('admin-state-filter');
  if (stateFilter) {
    // Populate states in filter dropdown
    stateFilter.innerHTML = `<option value="">All States / All India</option>`;
    Object.keys(INDIAN_STATES_DISTRICTS).sort().forEach(stateName => {
      const opt = document.createElement('option');
      opt.value = stateName;
      opt.textContent = stateName;
      stateFilter.appendChild(opt);
    });

    stateFilter.addEventListener('change', () => {
      renderAdminTable();
    });
  }
}

function refreshAdminDashboard() {
  updateMetrics();
  renderAdminTable();
}

function updateMetrics() {
  const schemes = loadSchemes();
  const total = schemes.length;
  const active = schemes.filter(s => s.status === 'active').length;
  const national = schemes.filter(s => s.state === 'All').length;
  const stateSpecific = schemes.filter(s => s.state !== 'All').length;

  const totalEl = document.getElementById('stat-total-val');
  const activeEl = document.getElementById('stat-active-val');
  const nationalEl = document.getElementById('stat-national-val');
  const stateEl = document.getElementById('stat-state-val');

  if (totalEl) totalEl.textContent = total;
  if (activeEl) activeEl.textContent = active;
  if (nationalEl) nationalEl.textContent = national;
  if (stateEl) stateEl.textContent = stateSpecific;
}

function renderAdminTable() {
  const tbody = document.getElementById('admin-schemes-tbody');
  if (!tbody) return;

  const schemes = loadSchemes();
  const searchInput = document.getElementById('admin-table-search');
  const stateFilter = document.getElementById('admin-state-filter');

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedState = stateFilter ? stateFilter.value : '';

  const filtered = schemes.filter(scheme => {
    // State filter
    if (selectedState && selectedState !== '') {
      if (scheme.state !== selectedState && scheme.state !== 'All') {
        return false;
      }
    }

    // Query search
    if (query) {
      const matchName = (scheme.name.en && scheme.name.en.toLowerCase().includes(query)) ||
                        (scheme.name.te && scheme.name.te.toLowerCase().includes(query)) ||
                        (scheme.name.hi && scheme.name.hi.toLowerCase().includes(query));
      const matchState = scheme.state && scheme.state.toLowerCase().includes(query);
      const matchDist = scheme.district && scheme.district.toLowerCase().includes(query);
      const matchCat = scheme.category && scheme.category.toLowerCase().includes(query);

      if (!matchName && !matchState && !matchDist && !matchCat) {
        return false;
      }
    }

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-4 text-muted">
          <i class="fas fa-folder-open fs-2 mb-2 d-block text-secondary"></i>
          No schemes found matching search criteria.
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(scheme => {
    const lang = currentAdminLang;
    const name = (scheme.name && scheme.name[lang]) || scheme.name.en || 'Untitled Scheme';
    const maxLand = scheme.maxLand >= 900 ? 'Unlimited' : `${scheme.maxLand} ac`;
    const landStr = `${scheme.minLand} - ${maxLand}`;
    const isActive = scheme.status === 'active';

    const statusBadge = isActive 
      ? `<span class="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 rounded-pill">Active</span>`
      : `<span class="badge bg-secondary-subtle text-secondary border border-secondary px-2 py-1 rounded-pill">Inactive</span>`;

    return `
      <tr>
        <td>
          <div class="fw-bold text-dark">${escapeHtml(name)}</div>
          <div class="small text-muted">${escapeHtml(scheme.category || 'General')}</div>
        </td>
        <td>
          <span class="badge ${scheme.state === 'All' ? 'bg-primary-subtle text-primary' : 'bg-info-subtle text-info-emphasis'} rounded-pill">
            ${scheme.state === 'All' ? 'All India' : escapeHtml(scheme.state)}
          </span>
        </td>
        <td>
          <span class="small text-secondary">${escapeHtml(scheme.district || 'All')}</span>
        </td>
        <td>
          <span class="small fw-semibold text-dark">${landStr}</span>
        </td>
        <td>
          <button class="btn btn-sm btn-link text-decoration-none p-0 btn-toggle-status" data-scheme-id="${scheme.id}" title="Click to toggle status">
            ${statusBadge}
          </button>
        </td>
        <td>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-primary btn-edit-scheme" data-scheme-id="${scheme.id}" title="${t('btn_edit')}">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-delete-scheme" data-scheme-id="${scheme.id}" title="${t('btn_delete')}">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Attach button events
  tbody.querySelectorAll('.btn-edit-scheme').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scheme-id');
      openEditSchemeModal(id);
    });
  });

  tbody.querySelectorAll('.btn-delete-scheme').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scheme-id');
      confirmDeleteScheme(id);
    });
  });

  tbody.querySelectorAll('.btn-toggle-status').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scheme-id');
      toggleSchemeStatus(id);
    });
  });
}

function toggleSchemeStatus(schemeId) {
  const scheme = getSchemeById(schemeId);
  if (!scheme) return;
  const newStatus = scheme.status === 'active' ? 'inactive' : 'active';
  updateScheme(schemeId, { status: newStatus });
  showToast(`Scheme status changed to ${newStatus}`, 'info');
  refreshAdminDashboard();
}

/* ==========================================================================
   Add / Edit Scheme Modal & Form
   ========================================================================== */
function initSchemeModal() {
  const modalEl = document.getElementById('adminSchemeModal');
  const stateSelect = document.getElementById('field-state');
  const distSelect = document.getElementById('field-district');
  const addNewBtn = document.getElementById('btn-add-new-scheme');
  const form = document.getElementById('admin-scheme-form');

  if (!modalEl || !form) return;

  // Populate States dropdown in modal
  if (stateSelect) {
    stateSelect.innerHTML = `<option value="All">All India (Nationwide)</option>`;
    Object.keys(INDIAN_STATES_DISTRICTS).sort().forEach(stateName => {
      const opt = document.createElement('option');
      opt.value = stateName;
      opt.textContent = stateName;
      stateSelect.appendChild(opt);
    });

    stateSelect.addEventListener('change', () => {
      populateDistrictDropdown(stateSelect.value, distSelect);
    });
  }

  // Open Add Scheme Modal
  if (addNewBtn) {
    addNewBtn.addEventListener('click', () => {
      openAddSchemeModal();
    });
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveSchemeFromForm();
  });
}

function populateDistrictDropdown(selectedState, distSelect, currentVal = 'All') {
  if (!distSelect) return;
  distSelect.innerHTML = `<option value="All">All Districts</option>`;

  if (selectedState && selectedState !== 'All' && INDIAN_STATES_DISTRICTS[selectedState]) {
    const districts = INDIAN_STATES_DISTRICTS[selectedState];
    districts.forEach(dist => {
      if (dist !== 'All Districts') {
        const opt = document.createElement('option');
        opt.value = dist;
        opt.textContent = dist;
        distSelect.appendChild(opt);
      }
    });
  }
  distSelect.value = currentVal;
}

function openAddSchemeModal() {
  editingSchemeId = null;
  const form = document.getElementById('admin-scheme-form');
  if (form) form.reset();

  document.getElementById('adminModalTitle').textContent = t('modal_add_title');

  // Set default tabs
  document.getElementById('tab-en-btn').click();

  // Reset district dropdown
  const distSelect = document.getElementById('field-district');
  populateDistrictDropdown('All', distSelect, 'All');

  // Default values
  document.getElementById('field-min-land').value = '0';
  document.getElementById('field-max-land').value = '999';
  document.getElementById('field-status').value = 'active';

  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('adminSchemeModal'));
  modal.show();
}

function openEditSchemeModal(schemeId) {
  const scheme = getSchemeById(schemeId);
  if (!scheme) return;

  editingSchemeId = schemeId;
  document.getElementById('adminModalTitle').textContent = t('modal_edit_title');

  // English Fields
  document.getElementById('field-name-en').value = scheme.name.en || '';
  document.getElementById('field-desc-en').value = scheme.description.en || '';
  document.getElementById('field-elig-en').value = scheme.eligibility.en || '';
  document.getElementById('field-benefits-en').value = scheme.benefits.en || '';
  document.getElementById('field-docs-en').value = scheme.documents.en || '';
  document.getElementById('field-apply-en').value = scheme.applicationProcess.en || '';

  // Telugu Fields
  document.getElementById('field-name-te').value = scheme.name.te || '';
  document.getElementById('field-desc-te').value = scheme.description.te || '';
  document.getElementById('field-elig-te').value = scheme.eligibility.te || '';
  document.getElementById('field-benefits-te').value = scheme.benefits.te || '';
  document.getElementById('field-docs-te').value = scheme.documents.te || '';
  document.getElementById('field-apply-te').value = scheme.applicationProcess.te || '';

  // Hindi Fields
  document.getElementById('field-name-hi').value = scheme.name.hi || '';
  document.getElementById('field-desc-hi').value = scheme.description.hi || '';
  document.getElementById('field-elig-hi').value = scheme.eligibility.hi || '';
  document.getElementById('field-benefits-hi').value = scheme.benefits.hi || '';
  document.getElementById('field-docs-hi').value = scheme.documents.hi || '';
  document.getElementById('field-apply-hi').value = scheme.applicationProcess.hi || '';

  // Location & Land
  document.getElementById('field-state').value = scheme.state || 'All';
  const distSelect = document.getElementById('field-district');
  populateDistrictDropdown(scheme.state, distSelect, scheme.district || 'All');

  document.getElementById('field-village').value = scheme.village === 'All' ? '' : (scheme.village || '');
  document.getElementById('field-min-land').value = scheme.minLand !== undefined ? scheme.minLand : 0;
  document.getElementById('field-max-land').value = scheme.maxLand !== undefined ? scheme.maxLand : 999;
  document.getElementById('field-url').value = scheme.officialUrl || '';
  document.getElementById('field-category').value = scheme.category || 'Financial Assistance';
  document.getElementById('field-status').value = scheme.status || 'active';

  // Open first tab
  document.getElementById('tab-en-btn').click();

  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('adminSchemeModal'));
  modal.show();
}

function saveSchemeFromForm() {
  const nameEn = document.getElementById('field-name-en').value.trim();
  const descEn = document.getElementById('field-desc-en').value.trim();
  const eligEn = document.getElementById('field-elig-en').value.trim();
  const benefitsEn = document.getElementById('field-benefits-en').value.trim();
  const docsEn = document.getElementById('field-docs-en').value.trim();
  const applyEn = document.getElementById('field-apply-en').value.trim();

  // Telugu
  const nameTe = document.getElementById('field-name-te').value.trim() || nameEn;
  const descTe = document.getElementById('field-desc-te').value.trim() || descEn;
  const eligTe = document.getElementById('field-elig-te').value.trim() || eligEn;
  const benefitsTe = document.getElementById('field-benefits-te').value.trim() || benefitsEn;
  const docsTe = document.getElementById('field-docs-te').value.trim() || docsEn;
  const applyTe = document.getElementById('field-apply-te').value.trim() || applyEn;

  // Hindi
  const nameHi = document.getElementById('field-name-hi').value.trim() || nameEn;
  const descHi = document.getElementById('field-desc-hi').value.trim() || descEn;
  const eligHi = document.getElementById('field-elig-hi').value.trim() || eligEn;
  const benefitsHi = document.getElementById('field-benefits-hi').value.trim() || benefitsEn;
  const docsHi = document.getElementById('field-docs-hi').value.trim() || docsEn;
  const applyHi = document.getElementById('field-apply-hi').value.trim() || applyEn;

  // Location & Land
  const state = document.getElementById('field-state').value;
  const district = document.getElementById('field-district').value;
  const village = document.getElementById('field-village').value.trim() || 'All';
  const minLand = parseFloat(document.getElementById('field-min-land').value);
  const maxLand = parseFloat(document.getElementById('field-max-land').value);
  const officialUrl = document.getElementById('field-url').value.trim();
  const category = document.getElementById('field-category').value;
  const status = document.getElementById('field-status').value;

  // Basic Validation
  if (!nameEn || !descEn || !eligEn || !benefitsEn || !docsEn || !applyEn) {
    showToast(t('form_err_req'), 'warning');
    return;
  }

  if (isNaN(minLand) || isNaN(maxLand) || minLand < 0 || maxLand < minLand) {
    showToast(t('form_err_land'), 'warning');
    return;
  }

  const schemeData = {
    name: { en: nameEn, te: nameTe, hi: nameHi },
    description: { en: descEn, te: descTe, hi: descHi },
    eligibility: { en: eligEn, te: eligTe, hi: eligHi },
    benefits: { en: benefitsEn, te: benefitsTe, hi: benefitsHi },
    documents: { en: docsEn, te: docsTe, hi: docsHi },
    applicationProcess: { en: applyEn, te: applyTe, hi: applyHi },
    state: state,
    district: district,
    village: village,
    minLand: minLand,
    maxLand: maxLand,
    officialUrl: officialUrl,
    category: category,
    status: status
  };

  if (editingSchemeId) {
    updateScheme(editingSchemeId, schemeData);
    showToast("Scheme updated successfully in LocalStorage!", "success");
  } else {
    addScheme(schemeData);
    showToast(t('scheme_saved_success'), "success");
  }

  // Close modal and refresh
  const modalEl = document.getElementById('adminSchemeModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  refreshAdminDashboard();
}

/* ==========================================================================
   Delete Scheme Handling
   ========================================================================== */
function initDeleteConfirmation() {
  const confirmBtn = document.getElementById('btn-confirm-delete');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (schemeToDeleteId) {
        deleteScheme(schemeToDeleteId);
        showToast(t('scheme_deleted_success'), 'success');
        schemeToDeleteId = null;

        const deleteModalEl = document.getElementById('deleteConfirmModal');
        const modal = bootstrap.Modal.getInstance(deleteModalEl);
        if (modal) modal.hide();

        refreshAdminDashboard();
      }
    });
  }
}

function confirmDeleteScheme(id) {
  schemeToDeleteId = id;
  const scheme = getSchemeById(id);
  const schemeNameEl = document.getElementById('deleteSchemeName');
  if (schemeNameEl && scheme) {
    schemeNameEl.textContent = scheme.name[currentAdminLang] || scheme.name.en;
  }
  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('deleteConfirmModal'));
  modal.show();
}

/* ==========================================================================
   Restore Default Demonstration Schemes
   ========================================================================== */
function initRestoreDefaults() {
  const restoreBtn = document.getElementById('btn-restore-defaults');
  const confirmRestoreBtn = document.getElementById('btn-confirm-restore');

  if (restoreBtn) {
    restoreBtn.addEventListener('click', () => {
      const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('restoreConfirmModal'));
      modal.show();
    });
  }

  if (confirmRestoreBtn) {
    confirmRestoreBtn.addEventListener('click', () => {
      restoreDefaultSchemes();
      showToast(t('schemes_restored_success'), 'success');

      const modalEl = document.getElementById('restoreConfirmModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();

      refreshAdminDashboard();
    });
  }
}
