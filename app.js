const alerts = [
  {
    id: "AL-1024",
    inventoryId: "INV-IR-88421",
    airline: "Iran Air",
    flightNo: "IR-431",
    route: "THR -> MHD",
    originCity: "Tehran",
    originAirport: "THR",
    destinationCity: "Mashhad",
    destinationAirport: "MHD",
    origin: "THR",
    destination: "MHD",
    date: "20 May",
    dateIso: "2026-05-20",
    advertisedTime: "08:00",
    licensedTime: "10:00",
    tripType: "Oneway",
    flightScope: "Domestic",
    supplier: "Aseman Charter Co.",
    agency: "Agency 1187",
    createdMinutesAgo: 34,
    departureHours: 7,
    reasons: [
      ["NO_LICENSE_MATCH", "No exact license exists for Iran Air at 08:00 on THR -> MHD."],
      ["NEAR_REAL_FLIGHT_TIME", "Advertised time is 120 minutes before a licensed Iran Air flight."],
      ["MULTIPLE_SHADOW_TIMES", "Same supplier also lists 12:00 around the 10:00 licensed flight."],
      ["SUPPLIER_HISTORY", "Four confirmed fake inventory cases in the last 90 days."]
    ],
    timeline: [
      ["09:08", "Inventory opened", "18 seats listed with fixed availability."],
      ["09:16", "License check failed", "No matching license for the advertised departure time."],
      ["09:21", "Shadow pattern found", "License record is Iran Air 10:00."],
      ["09:42", "Supplier listing verified", "Inventory details still differ from the license feed."]
    ]
  },
  {
    id: "AL-1025",
    inventoryId: "INV-IR-88433",
    airline: "Iran Air",
    flightNo: "IR-431",
    route: "THR -> MHD",
    originCity: "Tehran",
    originAirport: "THR",
    destinationCity: "Mashhad",
    destinationAirport: "MHD",
    origin: "THR",
    destination: "MHD",
    date: "20 May",
    dateIso: "2026-05-20",
    advertisedTime: "12:00",
    licensedTime: "10:00",
    tripType: "Roundtrip",
    flightScope: "Domestic",
    supplier: "Aseman Charter Co.",
    agency: "Agency 1187",
    createdMinutesAgo: 39,
    departureHours: 9,
    reasons: [
      ["NO_LICENSE_MATCH", "No license record supports a 12:00 departure."],
      ["NEAR_REAL_FLIGHT_TIME", "Time is 120 minutes after a valid Iran Air flight."],
      ["MULTIPLE_SHADOW_TIMES", "Two fake times surround one licensed operation."],
      ["MISSING_OR_INVALID_FLIGHT_NUMBER", "Flight number reused outside license time."]
    ],
    timeline: [
      ["09:03", "Inventory opened", "Inventory copied price and baggage from licensed flight."],
      ["09:15", "Related alert linked", "Matched to AL-1024 by supplier, route, airline, and date."],
      ["09:29", "License feed compared", "No matching 12:00 operation was found."],
      ["09:44", "Inventory still active", "Supplier listing remained visible after the license miss."]
    ]
  },
  {
    id: "AL-1026",
    inventoryId: "INV-QB-55318",
    airline: "Qeshm Air",
    flightNo: "QB-1206",
    route: "IFN -> THR",
    originCity: "Isfahan",
    originAirport: "IFN",
    destinationCity: "Tehran",
    destinationAirport: "THR",
    origin: "IFN",
    destination: "THR",
    date: "20 May",
    dateIso: "2026-05-20",
    advertisedTime: "15:45",
    licensedTime: "17:05",
    tripType: "Oneway",
    flightScope: "Domestic",
    supplier: "Pars Sky Supply",
    agency: "Agency 2044",
    createdMinutesAgo: 66,
    departureHours: 12,
    reasons: [
      ["NO_LICENSE_MATCH", "License feed has no 15:45 Qeshm Air operation."],
      ["NEAR_REAL_FLIGHT_TIME", "Advertised time is near a licensed 17:05 flight."],
      ["SUSPICIOUS_SEAT_AVAILABILITY", "Seat count has remained exactly 9 for six snapshots."],
      ["SUPPLIER_HISTORY", "Supplier has two confirmed route-time shifts."]
    ],
    timeline: [
      ["08:32", "Inventory opened", "Nine seats published on B2C and B2B channels."],
      ["08:46", "License miss", "No exact flight license found."],
      ["09:10", "Availability anomaly", "Fixed seat count across repeated checks."],
      ["09:41", "Alert created", "Rule evidence matched the license mismatch pattern."]
    ]
  },
  {
    id: "AL-1027",
    inventoryId: "INV-ZV-22091",
    airline: "Zagros Airlines",
    flightNo: "ZV-4102",
    route: "SYZ -> MHD",
    originCity: "Shiraz",
    originAirport: "SYZ",
    destinationCity: "Mashhad",
    destinationAirport: "MHD",
    origin: "SYZ",
    destination: "MHD",
    date: "21 May",
    dateIso: "2026-05-21",
    advertisedTime: "06:20",
    licensedTime: "08:00",
    tripType: "Roundtrip",
    flightScope: "Domestic",
    supplier: "Mehr Air Desk",
    agency: "Agency 3310",
    createdMinutesAgo: 92,
    departureHours: 22,
    reasons: [
      ["NO_LICENSE_MATCH", "No licensed Zagros flight at 06:20."],
      ["NEAR_REAL_FLIGHT_TIME", "Advertised time is 100 minutes from a licensed flight."],
      ["MISSING_OR_INVALID_FLIGHT_NUMBER", "Flight number is not present in license source."]
    ],
    timeline: [
      ["08:03", "Inventory opened", "Published after licensed 08:00 flight appeared."],
      ["08:30", "Flight number check failed", "Flight number not found in route license list."],
      ["09:31", "Alert created", "License mismatch evidence was generated."]
    ]
  },
  {
    id: "AL-1028",
    inventoryId: "INV-IV-14018",
    airline: "Caspian Airlines",
    flightNo: "CPN-692",
    route: "AWZ -> THR",
    originCity: "Ahvaz",
    originAirport: "AWZ",
    destinationCity: "Tehran",
    destinationAirport: "THR",
    origin: "AWZ",
    destination: "THR",
    date: "21 May",
    dateIso: "2026-05-21",
    advertisedTime: "19:10",
    licensedTime: "19:30",
    tripType: "Oneway",
    flightScope: "Domestic",
    supplier: "Shomal Ticket Hub",
    agency: "Agency 1710",
    createdMinutesAgo: 18,
    departureHours: 31,
    reasons: [
      ["NEAR_REAL_FLIGHT_TIME", "Advertised time is close to a licensed operation."],
      ["AMBIGUOUS_LICENSE_MATCH", "Two similar license records need validation."],
      ["SUSPICIOUS_SEAT_AVAILABILITY", "Availability is unchanged after five supplier polls."],
      ["SUPPLIER_HISTORY", "One prior confirmed case in the last 90 days."]
    ],
    timeline: [
      ["09:24", "Inventory opened", "Supplier listing appeared with a shifted departure time."],
      ["09:31", "Ambiguous match", "License times 19:30 and 20:05 both nearby."],
      ["09:42", "Alert created", "Monitoring until supplier update."]
    ]
  },
  {
    id: "AL-1029",
    inventoryId: "INV-EP-77401",
    airline: "Aseman Airlines",
    flightNo: "EP-3845",
    route: "TBZ -> THR",
    originCity: "Tabriz",
    originAirport: "TBZ",
    destinationCity: "Tehran",
    destinationAirport: "THR",
    origin: "TBZ",
    destination: "THR",
    date: "21 May",
    dateIso: "2026-05-21",
    advertisedTime: "11:30",
    licensedTime: "13:00",
    tripType: "Roundtrip",
    flightScope: "Domestic",
    supplier: "Kavir Charter",
    agency: "Agency 0920",
    createdMinutesAgo: 128,
    departureHours: 26,
    reasons: [
      ["NO_LICENSE_MATCH", "No Aseman license for 11:30 on this route."],
      ["LAST_MINUTE_TIME_CHANGE_PATTERN", "Supplier has a repeated pattern of moving listings to licensed times."],
      ["SUPPLIER_HISTORY", "Three confirmed fake cases in the last 90 days."],
      ["SUSPICIOUS_SEAT_AVAILABILITY", "Constant seat count across snapshots."]
    ],
    timeline: [
      ["07:34", "Inventory opened", "B2B and B2C inventory published together."],
      ["08:11", "Historical pattern matched", "Supplier has repeated time-shift behavior."],
      ["09:06", "Clarification requested", "Supply team asked supplier for license proof."],
      ["09:42", "Inventory still active", "Supplier listing remained visible after the license miss."]
    ]
  },
  {
    id: "AL-1030",
    inventoryId: "INV-TK-90412",
    airline: "Turkish Airlines",
    flightNo: "TK-873",
    route: "IKA -> IST",
    originCity: "Tehran",
    originAirport: "IKA",
    destinationCity: "Istanbul",
    destinationAirport: "IST",
    origin: "IKA",
    destination: "IST",
    date: "21 May",
    dateIso: "2026-05-21",
    advertisedTime: "04:15",
    licensedTime: "05:00",
    tripType: "Roundtrip",
    flightScope: "International",
    supplier: "Global Charter Desk",
    agency: "Agency 4401",
    createdMinutesAgo: 44,
    departureHours: 16,
    reasons: [
      ["NO_LICENSE_MATCH", "No exact Turkish Airlines license exists for IKA -> IST at 04:15."],
      ["NEAR_REAL_FLIGHT_TIME", "Advertised time is 45 minutes before the licensed Istanbul Airport operation."],
      ["AIRPORT_SCOPE_MISMATCH", "The city is Istanbul, but the license must match Istanbul Airport specifically."]
    ],
    timeline: [
      ["08:58", "Inventory opened", "International route published with Istanbul as destination city."],
      ["09:06", "Airport check failed", "License source has TK-873 at IST for 05:00, not 04:15."],
      ["09:38", "Alert created", "City matched but airport-time license did not match exactly."]
    ]
  },
  {
    id: "AL-1031",
    inventoryId: "INV-PC-77104",
    airline: "Pegasus Airlines",
    flightNo: "PC-517",
    route: "IKA -> SAW",
    originCity: "Tehran",
    originAirport: "IKA",
    destinationCity: "Istanbul",
    destinationAirport: "SAW",
    origin: "IKA",
    destination: "SAW",
    date: "21 May",
    dateIso: "2026-05-21",
    advertisedTime: "13:40",
    licensedTime: "15:10",
    tripType: "Oneway",
    flightScope: "International",
    supplier: "Anatolia Seat Hub",
    agency: "Agency 4401",
    createdMinutesAgo: 52,
    departureHours: 25,
    reasons: [
      ["NO_LICENSE_MATCH", "No Pegasus license supports IKA -> SAW at 13:40."],
      ["NEAR_REAL_FLIGHT_TIME", "Advertised time is near a licensed Sabiha Gokcen operation."],
      ["AIRPORT_SCOPE_MISMATCH", "Istanbul city has multiple airports, so SAW must be validated separately from IST."]
    ],
    timeline: [
      ["08:47", "Inventory opened", "Supplier listed Istanbul city with Sabiha Gokcen airport code."],
      ["09:12", "License check failed", "No exact Pegasus operation at the advertised departure time."],
      ["09:40", "Alert created", "Airport-specific license mismatch detected."]
    ]
  }
];

const supplierDirectory = [
  "Anatolia Seat Hub",
  "Aseman Charter Co.",
  "Global Charter Desk",
  "Kavir Charter",
  "Mehr Air Desk",
  "Pars Sky Supply",
  "Shomal Ticket Hub",
  ...Array.from({ length: 214 }, (_, index) => `Market Supplier ${String(index + 1).padStart(3, "0")}`)
];

const state = {
  view: "alerts",
  sortBy: "advertised",
  sortDirection: "asc",
  currentPage: 1,
  pageSize: 25,
  calendarMonth: alerts[0].dateIso.slice(0, 7),
  filters: {
    advertisedStartDate: "",
    advertisedEndDate: "",
    originCity: "",
    originAirport: "",
    destinationCity: "",
    destinationAirport: "",
    tripType: "",
    flightScope: "",
    error: "",
    exactTolerance: "15"
  },
  suppliers: {
    sortBy: "activeAlerts",
    sortDirection: "desc",
    currentPage: 1,
    pageSize: 25,
    selectedSupplier: "",
    calendarMonth: alerts[0].dateIso.slice(0, 7),
    filters: {
      search: "",
      error: "",
      flightScope: "",
      tripType: "",
      advertisedStartDate: "",
      advertisedEndDate: ""
    }
  }
};

const dom = {
  viewTitle: document.querySelector("#viewTitle"),
  views: document.querySelectorAll(".view"),
  navItems: document.querySelectorAll(".nav-item"),
  filterInputs: document.querySelectorAll("[data-filter]"),
  sortButtons: document.querySelectorAll("[data-sort]"),
  alertRows: document.querySelector("#alertRows"),
  queueSummary: document.querySelector("#queueSummary"),
  paginationSummary: document.querySelector("#paginationSummary"),
  paginationPages: document.querySelector("#paginationPages"),
  prevPageButton: document.querySelector("#prevPageButton"),
  nextPageButton: document.querySelector("#nextPageButton"),
  supplierActiveAlertCount: document.querySelector("#supplierActiveAlertCount"),
  supplierSummary: document.querySelector("#supplierSummary"),
  supplierActiveCount: document.querySelector("#supplierActiveCount"),
  supplierTopError: document.querySelector("#supplierTopError"),
  supplierFilterInputs: document.querySelectorAll("[data-supplier-filter]"),
  supplierSortButtons: document.querySelectorAll("[data-supplier-sort]"),
  supplierRows: document.querySelector("#supplierRows"),
  supplierDetailPanel: document.querySelector("#supplierDetailPanel"),
  supplierPaginationSummary: document.querySelector("#supplierPaginationSummary"),
  supplierPaginationPages: document.querySelector("#supplierPaginationPages"),
  supplierPrevPageButton: document.querySelector("#supplierPrevPageButton"),
  supplierNextPageButton: document.querySelector("#supplierNextPageButton"),
  supplierDatePickerButton: document.querySelector("#supplierDatePickerButton"),
  supplierDatePickerLabel: document.querySelector("#supplierDatePickerLabel"),
  supplierDatePickerPanel: document.querySelector("#supplierDatePickerPanel"),
  supplierCalendarMonthLabel: document.querySelector("#supplierCalendarMonthLabel"),
  supplierCalendarGrid: document.querySelector("#supplierCalendarGrid"),
  supplierPrevMonthButton: document.querySelector("#supplierPrevMonthButton"),
  supplierNextMonthButton: document.querySelector("#supplierNextMonthButton"),
  supplierPrevYearButton: document.querySelector("#supplierPrevYearButton"),
  supplierNextYearButton: document.querySelector("#supplierNextYearButton"),
  supplierClearDateFilter: document.querySelector("#supplierClearDateFilter"),
  datePickerButton: document.querySelector("#datePickerButton"),
  datePickerLabel: document.querySelector("#datePickerLabel"),
  datePickerPanel: document.querySelector("#datePickerPanel"),
  calendarMonthLabel: document.querySelector("#calendarMonthLabel"),
  calendarGrid: document.querySelector("#calendarGrid"),
  prevMonthButton: document.querySelector("#prevMonthButton"),
  nextMonthButton: document.querySelector("#nextMonthButton"),
  prevYearButton: document.querySelector("#prevYearButton"),
  nextYearButton: document.querySelector("#nextYearButton"),
  clearDateFilter: document.querySelector("#clearDateFilter"),
  toast: document.querySelector("#toast")
};

const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const availableDates = new Set(alerts.map((alert) => alert.dateIso));

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function licenseGapMinutes(alert) {
  return Math.abs(timeToMinutes(alert.advertisedTime) - timeToMinutes(alert.licensedTime));
}

function formatLicenseGap(alert) {
  const gap = licenseGapMinutes(alert);
  return `${gap} min`;
}

function cityRoute(alert) {
  return `${alert.originCity || alert.origin} -> ${alert.destinationCity || alert.destination}`;
}

function airportRoute(alert) {
  return `${alert.originAirport || alert.origin} -> ${alert.destinationAirport || alert.destination}`;
}

function uniqueValues(key) {
  return [...new Set(alerts.map((alert) => alert[key]))].sort((a, b) => collator.compare(a, b));
}

function fillSelect(selectId, label, values, selectedValue = "") {
  const select = document.querySelector(`#${selectId}`);
  select.innerHTML = [`<option value="">All ${label}</option>`, ...values.map((value) => `<option value="${value}">${value}</option>`)].join("");
  select.value = values.includes(selectedValue) ? selectedValue : "";
  return select.value;
}

function uniqueValuesWhere(key, predicate) {
  return [...new Set(alerts.filter(predicate).map((alert) => alert[key]))].sort((a, b) => collator.compare(a, b));
}

function renderFilterOptions() {
  state.filters.originCity = fillSelect("originCityFilter", "origin cities", uniqueValues("originCity"), state.filters.originCity);
  state.filters.destinationCity = fillSelect("destinationCityFilter", "destination cities", uniqueValues("destinationCity"), state.filters.destinationCity);
  state.filters.originAirport = fillSelect(
    "originAirportFilter",
    "origin airports",
    uniqueValuesWhere("originAirport", (alert) => !state.filters.originCity || alert.originCity === state.filters.originCity),
    state.filters.originAirport
  );
  state.filters.destinationAirport = fillSelect(
    "destinationAirportFilter",
    "destination airports",
    uniqueValuesWhere("destinationAirport", (alert) => !state.filters.destinationCity || alert.destinationCity === state.filters.destinationCity),
    state.filters.destinationAirport
  );
  state.filters.tripType = fillSelect("tripTypeFilter", "trip types", uniqueValues("tripType"), state.filters.tripType);
  state.filters.flightScope = fillSelect("flightScopeFilter", "flight types", uniqueValues("flightScope"), state.filters.flightScope);
  state.filters.error = fillSelect("errorFilter", "errors", [...new Set(alerts.map((alert) => primaryError(alert).code))].sort((a, b) => collator.compare(a, b)), state.filters.error);
}

function formatDateLabel(dateIso) {
  if (!dateIso) return "All dates";
  const [year, month, day] = dateIso.split("-").map(Number);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(year, month - 1, day));
}

function formatDateRangeLabel() {
  const { advertisedStartDate, advertisedEndDate } = state.filters;
  if (!advertisedStartDate && !advertisedEndDate) return "All advertised dates";
  if (advertisedStartDate && !advertisedEndDate) return `From ${formatDateLabel(advertisedStartDate)}`;
  if (!advertisedStartDate && advertisedEndDate) return `Until ${formatDateLabel(advertisedEndDate)}`;
  if (advertisedStartDate === advertisedEndDate) return formatDateLabel(advertisedStartDate);
  return `${formatDateLabel(advertisedStartDate)} - ${formatDateLabel(advertisedEndDate)}`;
}

function moveCalendarMonth(delta) {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const nextMonth = new Date(year, month - 1 + delta, 1);
  state.calendarMonth = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, "0")}`;
  renderCalendar();
}

function moveCalendarYear(delta) {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  state.calendarMonth = `${year + delta}-${String(month).padStart(2, "0")}`;
  renderCalendar();
}

function selectAdvertisedDate(dateIso) {
  const { advertisedStartDate, advertisedEndDate } = state.filters;

  if (!advertisedStartDate || advertisedEndDate || dateIso < advertisedStartDate) {
    state.filters.advertisedStartDate = dateIso;
    state.filters.advertisedEndDate = "";
  } else {
    state.filters.advertisedEndDate = dateIso;
    closeCalendar();
  }

  resetPagination();
}

function renderCalendar() {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const monthIndex = month - 1;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const { advertisedStartDate, advertisedEndDate } = state.filters;

  dom.calendarMonthLabel.textContent = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric"
  }).format(new Date(year, monthIndex, 1));
  dom.datePickerLabel.textContent = formatDateRangeLabel();

  const blanks = Array.from({ length: firstDay }, () => '<span class="calendar-empty"></span>');
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const dateIso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const hasAlerts = availableDates.has(dateIso);
    const isStart = advertisedStartDate === dateIso;
    const isEnd = advertisedEndDate === dateIso;
    const inRange = advertisedStartDate && advertisedEndDate && dateIso > advertisedStartDate && dateIso < advertisedEndDate;
    const classes = [
      hasAlerts ? "has-alerts" : "",
      isStart ? "range-start" : "",
      isEnd ? "range-end" : "",
      inRange ? "in-range" : ""
    ]
      .filter(Boolean)
      .join(" ");

    return `
      <button class="${classes}" type="button" data-date="${dateIso}" aria-pressed="${isStart || isEnd}">
        ${day}
      </button>
    `;
  });

  dom.calendarGrid.innerHTML = [...blanks, ...days].join("");
  dom.calendarGrid.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectAdvertisedDate(button.dataset.date);
      renderCalendar();
      renderQueue();
    });
  });
}

function closeCalendar() {
  dom.datePickerPanel.hidden = true;
  dom.datePickerButton.setAttribute("aria-expanded", "false");
}

function supplierDateScopedAlerts() {
  const { advertisedStartDate, advertisedEndDate } = state.suppliers.filters;

  return alerts.filter((alert) => {
    const matchesStart = !advertisedStartDate || alert.dateIso >= advertisedStartDate;
    const matchesEnd = !advertisedEndDate || alert.dateIso <= advertisedEndDate;
    return matchesStart && matchesEnd;
  });
}

function formatSupplierDateRangeLabel() {
  const { advertisedStartDate, advertisedEndDate } = state.suppliers.filters;
  if (!advertisedStartDate && !advertisedEndDate) return "All active alert dates";
  if (advertisedStartDate && !advertisedEndDate) return `From ${formatDateLabel(advertisedStartDate)}`;
  if (!advertisedStartDate && advertisedEndDate) return `Until ${formatDateLabel(advertisedEndDate)}`;
  if (advertisedStartDate === advertisedEndDate) return formatDateLabel(advertisedStartDate);
  return `${formatDateLabel(advertisedStartDate)} - ${formatDateLabel(advertisedEndDate)}`;
}

function moveSupplierCalendarMonth(delta) {
  const [year, month] = state.suppliers.calendarMonth.split("-").map(Number);
  const nextMonth = new Date(year, month - 1 + delta, 1);
  state.suppliers.calendarMonth = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, "0")}`;
  renderSupplierCalendar();
}

function moveSupplierCalendarYear(delta) {
  const [year, month] = state.suppliers.calendarMonth.split("-").map(Number);
  state.suppliers.calendarMonth = `${year + delta}-${String(month).padStart(2, "0")}`;
  renderSupplierCalendar();
}

function selectSupplierAdvertisedDate(dateIso) {
  const { advertisedStartDate, advertisedEndDate } = state.suppliers.filters;

  if (!advertisedStartDate || advertisedEndDate || dateIso < advertisedStartDate) {
    state.suppliers.filters.advertisedStartDate = dateIso;
    state.suppliers.filters.advertisedEndDate = "";
  } else {
    state.suppliers.filters.advertisedEndDate = dateIso;
    closeSupplierCalendar();
  }

  resetSupplierPagination();
}

function renderSupplierCalendar() {
  const [year, month] = state.suppliers.calendarMonth.split("-").map(Number);
  const monthIndex = month - 1;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const { advertisedStartDate, advertisedEndDate } = state.suppliers.filters;

  dom.supplierCalendarMonthLabel.textContent = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric"
  }).format(new Date(year, monthIndex, 1));
  dom.supplierDatePickerLabel.textContent = formatSupplierDateRangeLabel();

  const blanks = Array.from({ length: firstDay }, () => '<span class="calendar-empty"></span>');
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const dateIso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const hasAlerts = availableDates.has(dateIso);
    const isStart = advertisedStartDate === dateIso;
    const isEnd = advertisedEndDate === dateIso;
    const inRange = advertisedStartDate && advertisedEndDate && dateIso > advertisedStartDate && dateIso < advertisedEndDate;
    const classes = [
      hasAlerts ? "has-alerts" : "",
      isStart ? "range-start" : "",
      isEnd ? "range-end" : "",
      inRange ? "in-range" : ""
    ]
      .filter(Boolean)
      .join(" ");

    return `
      <button class="${classes}" type="button" data-supplier-date="${dateIso}" aria-pressed="${isStart || isEnd}">
        ${day}
      </button>
    `;
  });

  dom.supplierCalendarGrid.innerHTML = [...blanks, ...days].join("");
  dom.supplierCalendarGrid.querySelectorAll("[data-supplier-date]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectSupplierAdvertisedDate(button.dataset.supplierDate);
      renderSupplierFilterOptions();
      renderSupplierCalendar();
      renderSuppliers();
    });
  });
}

function closeSupplierCalendar() {
  dom.supplierDatePickerPanel.hidden = true;
  dom.supplierDatePickerButton.setAttribute("aria-expanded", "false");
}

function primaryError(alert) {
  const [code, note] = alert.reasons[0];
  return { code, note };
}

function sortValue(alert, key) {
  if (key === "inventory") return `${cityRoute(alert)} ${airportRoute(alert)} ${alert.inventoryId}`;
  if (key === "advertised") return `${alert.dateIso} ${alert.advertisedTime}`;
  if (key === "license") return timeToMinutes(alert.licensedTime);
  if (key === "tripType") return alert.tripType;
  if (key === "flightScope") return alert.flightScope;
  if (key === "supplier") return alert.supplier;
  if (key === "error") return primaryError(alert).code;
  return "";
}

function compareSortValues(a, b) {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return collator.compare(String(a), String(b));
}

function renderSortHeaders() {
  dom.sortButtons.forEach((button) => {
    const isActive = button.dataset.sort === state.sortBy;
    button.classList.toggle("active", isActive);
    button.classList.toggle("descending", isActive && state.sortDirection === "desc");
    button.setAttribute("aria-sort", isActive ? (state.sortDirection === "asc" ? "ascending" : "descending") : "none");
  });
}

function resetPagination() {
  state.currentPage = 1;
}

function filteredAlerts() {
  const tolerance = Number(state.filters.exactTolerance);

  return alerts
    .filter((alert) => {
      const matchesDateRange =
        (!state.filters.advertisedStartDate || alert.dateIso >= state.filters.advertisedStartDate) &&
        (!state.filters.advertisedEndDate || alert.dateIso <= state.filters.advertisedEndDate);
      const matchesOriginCity = !state.filters.originCity || alert.originCity === state.filters.originCity;
      const matchesOriginAirport = !state.filters.originAirport || alert.originAirport === state.filters.originAirport;
      const matchesDestinationCity = !state.filters.destinationCity || alert.destinationCity === state.filters.destinationCity;
      const matchesDestinationAirport = !state.filters.destinationAirport || alert.destinationAirport === state.filters.destinationAirport;
      const matchesTripType = !state.filters.tripType || alert.tripType === state.filters.tripType;
      const matchesFlightScope = !state.filters.flightScope || alert.flightScope === state.filters.flightScope;
      const matchesError = !state.filters.error || primaryError(alert).code === state.filters.error;
      const outsideTolerance = licenseGapMinutes(alert) > tolerance;

      return (
        matchesDateRange &&
        matchesOriginCity &&
        matchesOriginAirport &&
        matchesDestinationCity &&
        matchesDestinationAirport &&
        matchesTripType &&
        matchesFlightScope &&
        matchesError &&
        outsideTolerance
      );
    })
    .sort((a, b) => {
      const result = compareSortValues(sortValue(a, state.sortBy), sortValue(b, state.sortBy));
      return state.sortDirection === "asc" ? result : -result;
    });
}

function totalPagesFor(rows) {
  return Math.max(1, Math.ceil(rows.length / state.pageSize));
}

function clampCurrentPage(rows) {
  const totalPages = totalPagesFor(rows);
  state.currentPage = Math.min(Math.max(state.currentPage, 1), totalPages);
  return totalPages;
}

function paginatedAlerts(rows) {
  clampCurrentPage(rows);
  const start = (state.currentPage - 1) * state.pageSize;
  return rows.slice(start, start + state.pageSize);
}

function paginationButton(pageNumber) {
  const active = pageNumber === state.currentPage;
  return `
    <button class="page-button ${active ? "active" : ""}" type="button" data-page="${pageNumber}" ${active ? 'aria-current="page"' : ""}>
      ${pageNumber}
    </button>
  `;
}

function renderPagination(rows) {
  const totalRows = rows.length;
  const totalPages = clampCurrentPage(rows);
  const startRow = totalRows ? (state.currentPage - 1) * state.pageSize + 1 : 0;
  const endRow = Math.min(state.currentPage * state.pageSize, totalRows);

  dom.paginationSummary.textContent = totalRows
    ? `Showing ${startRow}-${endRow} of ${totalRows} ${totalRows === 1 ? "alert" : "alerts"}`
    : "Showing 0 of 0 alerts";
  dom.prevPageButton.disabled = state.currentPage === 1;
  dom.nextPageButton.disabled = state.currentPage === totalPages;

  const pages = [];
  if (totalPages <= 7) {
    for (let page = 1; page <= totalPages; page += 1) pages.push(paginationButton(page));
  } else {
    const middleStart = Math.max(2, state.currentPage - 1);
    const middleEnd = Math.min(totalPages - 1, state.currentPage + 1);
    pages.push(paginationButton(1));
    if (middleStart > 2) pages.push('<span class="page-ellipsis">...</span>');
    for (let page = middleStart; page <= middleEnd; page += 1) pages.push(paginationButton(page));
    if (middleEnd < totalPages - 1) pages.push('<span class="page-ellipsis">...</span>');
    pages.push(paginationButton(totalPages));
  }

  dom.paginationPages.innerHTML = pages.join("");
}

function renderKpis() {
  document.querySelector("#alertCount").textContent = alerts.length;
  document.querySelector("#nearDepartureCount").textContent = alerts.filter((alert) => alert.departureHours <= 24).length;
}

function renderQueue() {
  const rows = filteredAlerts();
  const pageRows = paginatedAlerts(rows);
  renderSortHeaders();
  renderPagination(rows);
  dom.queueSummary.textContent = `${rows.length} matching ${rows.length === 1 ? "alert" : "alerts"}`;

  if (!pageRows.length) {
    dom.alertRows.innerHTML = '<tr><td colspan="7" class="empty-row">No alerts match the selected filters.</td></tr>';
    return;
  }

  dom.alertRows.innerHTML = pageRows
    .map(
      (alert) => {
        const error = primaryError(alert);
        return `
        <tr>
          <td>
            <span class="route-title">${cityRoute(alert)}</span>
            <span class="meta-line">${airportRoute(alert)} | ${alert.airline} ${alert.flightNo} | ${alert.inventoryId}</span>
          </td>
          <td>
            <span class="route-title">${alert.date}, ${alert.advertisedTime}</span>
          </td>
          <td>
            <span class="route-title">${alert.licensedTime}</span>
            <span class="meta-line">${formatLicenseGap(alert)} from advertised</span>
          </td>
          <td>
            <span class="trip-pill">${alert.tripType}</span>
          </td>
          <td>
            <span class="scope-pill ${alert.flightScope}">${alert.flightScope}</span>
          </td>
          <td>
            <button class="supplier-link" type="button" data-queue-supplier="${alert.supplier}">
              <span class="supplier-title">${alert.supplier}</span>
              <span class="meta-line">${alert.agency}</span>
            </button>
          </td>
          <td>
            <span class="error-code">${error.code}</span>
            <span class="meta-line">${error.note}</span>
          </td>
        </tr>
      `;
      }
    )
    .join("");
}

function countValues(values) {
  return values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function sortedCountEntries(counts) {
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || collator.compare(a[0], b[0]));
}

function topCountValue(counts, fallback = "-") {
  return sortedCountEntries(counts)[0]?.[0] || fallback;
}

function formatDateTimeLabel(dateIso, time) {
  if (!dateIso) return "-";
  return `${formatDateLabel(dateIso)}, ${time}`;
}

function supplierNames() {
  return [...new Set([...supplierDirectory, ...alerts.map((alert) => alert.supplier)])].sort((a, b) => collator.compare(a, b));
}

function supplierRowsData() {
  const dateScopedAlerts = supplierDateScopedAlerts();

  return supplierNames().map((name) => {
    const supplierAlerts = dateScopedAlerts.filter((alert) => alert.supplier === name);
    const routeCounts = countValues(supplierAlerts.map((alert) => cityRoute(alert)));
    const errorCounts = countValues(supplierAlerts.map((alert) => primaryError(alert).code));
    const flightScopeCounts = countValues(supplierAlerts.map((alert) => alert.flightScope));
    const tripTypeCounts = countValues(supplierAlerts.map((alert) => alert.tripType));
    const latestAlert =
      [...supplierAlerts].sort((a, b) => collator.compare(`${b.dateIso} ${b.advertisedTime}`, `${a.dateIso} ${a.advertisedTime}`))[0] || null;
    const gapTotal = supplierAlerts.reduce((sum, alert) => sum + licenseGapMinutes(alert), 0);
    return {
      name,
      activeAlerts: supplierAlerts.length,
      routes: Object.keys(routeCounts).length,
      routeCounts,
      errorCounts,
      flightScopeCounts,
      tripTypeCounts,
      commonError: topCountValue(errorCounts),
      latestAlert,
      latestAlertSort: latestAlert ? `${latestAlert.dateIso} ${latestAlert.advertisedTime}` : "",
      avgGap: supplierAlerts.length ? Math.round(gapTotal / supplierAlerts.length) : 0,
      alerts: supplierAlerts
    };
  });
}

function filteredSuppliers() {
  const filters = state.suppliers.filters;
  const search = filters.search.trim().toLowerCase();

  return supplierRowsData()
    .filter((supplier) => {
      const hasFraudErrors = supplier.activeAlerts > 0;
      const matchesSearch = !search || supplier.name.toLowerCase().includes(search);
      const matchesError = !filters.error || Boolean(supplier.errorCounts[filters.error]);
      const matchesFlightScope = !filters.flightScope || Boolean(supplier.flightScopeCounts[filters.flightScope]);
      const matchesTripType = !filters.tripType || Boolean(supplier.tripTypeCounts[filters.tripType]);

      return hasFraudErrors && matchesSearch && matchesError && matchesFlightScope && matchesTripType;
    })
    .sort((a, b) => {
      const result = compareSortValues(supplierSortValue(a, state.suppliers.sortBy), supplierSortValue(b, state.suppliers.sortBy));
      return state.suppliers.sortDirection === "asc" ? result : -result;
    });
}

function supplierSortValue(supplier, key) {
  if (key === "name") return supplier.name;
  if (key === "activeAlerts") return supplier.activeAlerts;
  if (key === "routes") return supplier.routes;
  if (key === "commonError") return supplier.commonError;
  if (key === "latestAlert") return supplier.latestAlertSort;
  if (key === "avgGap") return supplier.avgGap;
  return "";
}

function renderSupplierFilterOptions() {
  const dateScopedAlerts = supplierDateScopedAlerts();

  state.suppliers.filters.error = fillSelect(
    "supplierErrorFilter",
    "errors",
    [...new Set(dateScopedAlerts.map((alert) => primaryError(alert).code))].sort((a, b) => collator.compare(a, b)),
    state.suppliers.filters.error
  );
  state.suppliers.filters.flightScope = fillSelect(
    "supplierFlightScopeFilter",
    "flight types",
    [...new Set(dateScopedAlerts.map((alert) => alert.flightScope))].sort((a, b) => collator.compare(a, b)),
    state.suppliers.filters.flightScope
  );
  state.suppliers.filters.tripType = fillSelect(
    "supplierTripTypeFilter",
    "trip types",
    [...new Set(dateScopedAlerts.map((alert) => alert.tripType))].sort((a, b) => collator.compare(a, b)),
    state.suppliers.filters.tripType
  );
  document.querySelector("#supplierSearch").value = state.suppliers.filters.search;
}

function renderSupplierSortHeaders() {
  dom.supplierSortButtons.forEach((button) => {
    const isActive = button.dataset.supplierSort === state.suppliers.sortBy;
    button.classList.toggle("active", isActive);
    button.classList.toggle("descending", isActive && state.suppliers.sortDirection === "desc");
    button.setAttribute("aria-sort", isActive ? (state.suppliers.sortDirection === "asc" ? "ascending" : "descending") : "none");
  });
}

function resetSupplierPagination() {
  state.suppliers.currentPage = 1;
}

function supplierTotalPagesFor(rows) {
  return Math.max(1, Math.ceil(rows.length / state.suppliers.pageSize));
}

function clampSupplierPage(rows) {
  const totalPages = supplierTotalPagesFor(rows);
  state.suppliers.currentPage = Math.min(Math.max(state.suppliers.currentPage, 1), totalPages);
  return totalPages;
}

function paginatedSuppliers(rows) {
  clampSupplierPage(rows);
  const start = (state.suppliers.currentPage - 1) * state.suppliers.pageSize;
  return rows.slice(start, start + state.suppliers.pageSize);
}

function supplierPaginationButton(pageNumber) {
  const active = pageNumber === state.suppliers.currentPage;
  return `
    <button class="page-button ${active ? "active" : ""}" type="button" data-supplier-page="${pageNumber}" ${active ? 'aria-current="page"' : ""}>
      ${pageNumber}
    </button>
  `;
}

function renderSupplierPagination(rows) {
  const totalRows = rows.length;
  const totalPages = clampSupplierPage(rows);
  const startRow = totalRows ? (state.suppliers.currentPage - 1) * state.suppliers.pageSize + 1 : 0;
  const endRow = Math.min(state.suppliers.currentPage * state.suppliers.pageSize, totalRows);

  dom.supplierPaginationSummary.textContent = totalRows
    ? `Showing ${startRow}-${endRow} of ${totalRows} ${totalRows === 1 ? "supplier" : "suppliers"}`
    : "Showing 0 of 0 suppliers";
  dom.supplierPrevPageButton.disabled = state.suppliers.currentPage === 1;
  dom.supplierNextPageButton.disabled = state.suppliers.currentPage === totalPages;

  const pages = [];
  if (totalPages <= 7) {
    for (let page = 1; page <= totalPages; page += 1) pages.push(supplierPaginationButton(page));
  } else {
    const middleStart = Math.max(2, state.suppliers.currentPage - 1);
    const middleEnd = Math.min(totalPages - 1, state.suppliers.currentPage + 1);
    pages.push(supplierPaginationButton(1));
    if (middleStart > 2) pages.push('<span class="page-ellipsis">...</span>');
    for (let page = middleStart; page <= middleEnd; page += 1) pages.push(supplierPaginationButton(page));
    if (middleEnd < totalPages - 1) pages.push('<span class="page-ellipsis">...</span>');
    pages.push(supplierPaginationButton(totalPages));
  }

  dom.supplierPaginationPages.innerHTML = pages.join("");
}

function renderSupplierMetrics(rows) {
  const activeRows = rows.filter((supplier) => supplier.activeAlerts > 0);
  const activeAlertCount = rows.reduce((sum, supplier) => sum + supplier.activeAlerts, 0);
  const errorCounts = rows.reduce((acc, supplier) => {
    Object.entries(supplier.errorCounts).forEach(([code, count]) => {
      acc[code] = (acc[code] || 0) + count;
    });
    return acc;
  }, {});

  dom.supplierSummary.textContent = `${rows.length} matching ${rows.length === 1 ? "supplier" : "suppliers"}`;
  dom.supplierActiveAlertCount.textContent = activeAlertCount;
  dom.supplierActiveCount.textContent = activeRows.length;
  dom.supplierTopError.textContent = topCountValue(errorCounts);
}

function supplierDetailAlerts(supplier) {
  return [...supplier.alerts].sort((a, b) => collator.compare(`${b.dateIso} ${b.advertisedTime}`, `${a.dateIso} ${a.advertisedTime}`));
}

function renderSupplierDetail(supplier) {
  if (!supplier) {
    dom.supplierDetailPanel.innerHTML = '<p class="empty-row">Select a supplier to review active alerts.</p>';
    return;
  }

  const detailAlerts = supplierDetailAlerts(supplier);
  const errorCounts = countValues(detailAlerts.map((alert) => primaryError(alert).code));
  const routeCounts = countValues(detailAlerts.map((alert) => cityRoute(alert)));
  const errorEntries = sortedCountEntries(errorCounts);
  const routeEntries = sortedCountEntries(routeCounts);
  const latestDetailAlert = detailAlerts[0] || null;
  const avgDetailGap = detailAlerts.length
    ? Math.round(detailAlerts.reduce((sum, alert) => sum + licenseGapMinutes(alert), 0) / detailAlerts.length)
    : 0;
  const errorItems = errorEntries
    .map(([code, count]) => `<li><span>${code}</span><strong>${count}</strong></li>`)
    .join("");
  const routeItems = routeEntries
    .map(([route, count]) => `<li><span>${route}</span><strong>${count}</strong></li>`)
    .join("");
  const activeAlertRows = detailAlerts
    .map((alert) => {
      const error = primaryError(alert);
      return `
        <tr>
          <td>${formatDateTimeLabel(alert.dateIso, alert.advertisedTime)}</td>
          <td>${cityRoute(alert)}</td>
          <td>${alert.flightNo}</td>
          <td><span class="error-code">${error.code}</span></td>
        </tr>
      `;
    })
    .join("");

  dom.supplierDetailPanel.innerHTML = `
    <div class="supplier-detail-heading">
      <div>
        <h4>${supplier.name}</h4>
      </div>
    </div>
    <div class="supplier-detail-stats">
      <div><span>Active alerts</span><strong>${detailAlerts.length}</strong></div>
      <div><span>Latest advertised</span><strong>${formatDateTimeLabel(latestDetailAlert?.dateIso, latestDetailAlert?.advertisedTime)}</strong></div>
      <div><span>Average gap</span><strong>${detailAlerts.length ? `${avgDetailGap} min` : "-"}</strong></div>
      <div><span>Alerted routes</span><strong>${routeEntries.length}</strong></div>
    </div>
    <div class="supplier-breakdowns">
      <section class="supplier-breakdown-card">
        <header>
          <h5>Error breakdown</h5>
          <span>${errorEntries.length} ${errorEntries.length === 1 ? "error" : "errors"}</span>
        </header>
        <ul>${errorItems || "<li><span>No active errors</span><strong>0</strong></li>"}</ul>
      </section>
      <section class="supplier-breakdown-card route-breakdown-card">
        <header>
          <h5>Route breakdown</h5>
          <span>${routeEntries.length} ${routeEntries.length === 1 ? "route" : "routes"}</span>
        </header>
        <div class="route-breakdown-scroll">
          <ul>${routeItems || "<li><span>No alerted routes</span><strong>0</strong></li>"}</ul>
        </div>
      </section>
    </div>
    <section class="supplier-recent">
      <h5>Active alerts</h5>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Advertised</th><th>Route</th><th>Flight number</th><th>Error</th></tr>
          </thead>
          <tbody>${activeAlertRows || '<tr><td colspan="4" class="empty-row">No active alerts match this date range.</td></tr>'}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSuppliers() {
  const rows = filteredSuppliers();
  const pageRows = paginatedSuppliers(rows);
  const visibleSelected = rows.find((supplier) => supplier.name === state.suppliers.selectedSupplier);
  if (!visibleSelected) state.suppliers.selectedSupplier = rows[0]?.name || "";

  renderSupplierSortHeaders();
  renderSupplierMetrics(rows);
  renderSupplierPagination(rows);
  const selectedSupplier = rows.find((supplier) => supplier.name === state.suppliers.selectedSupplier);

  if (!pageRows.length) {
    dom.supplierRows.innerHTML = '<tr><td colspan="6" class="empty-row">No suppliers match the selected filters.</td></tr>';
    renderSupplierDetail(null);
    return;
  }

  dom.supplierRows.innerHTML = pageRows
    .map(
      (supplier) => `
        <tr class="${supplier.name === state.suppliers.selectedSupplier ? "selected" : ""}" tabindex="0" data-supplier="${supplier.name}">
          <td>
            <span class="supplier-title">${supplier.name}</span>
          </td>
          <td><strong>${supplier.activeAlerts}</strong></td>
          <td>${supplier.routes}</td>
          <td><span class="error-code">${supplier.commonError}</span></td>
          <td>${formatDateTimeLabel(supplier.latestAlert?.dateIso, supplier.latestAlert?.advertisedTime)}</td>
          <td>${supplier.activeAlerts ? `${supplier.avgGap} min` : "-"}</td>
        </tr>
      `
    )
    .join("");

  renderSupplierDetail(selectedSupplier);
}

function openSupplierFromQueue(supplierName) {
  state.suppliers.selectedSupplier = supplierName;
  state.suppliers.sortBy = "activeAlerts";
  state.suppliers.sortDirection = "desc";
  state.suppliers.filters.search = "";
  state.suppliers.filters.error = "";
  state.suppliers.filters.flightScope = "";
  state.suppliers.filters.tripType = "";
  state.suppliers.filters.advertisedStartDate = "";
  state.suppliers.filters.advertisedEndDate = "";
  renderSupplierFilterOptions();
  renderSupplierCalendar();

  const rows = filteredSuppliers();
  const supplierIndex = rows.findIndex((supplier) => supplier.name === supplierName);
  state.suppliers.currentPage = supplierIndex >= 0 ? Math.floor(supplierIndex / state.suppliers.pageSize) + 1 : 1;
  setView("suppliers");
}

function renderReports() {
  const routeCounts = alerts.reduce((acc, alert) => {
    const route = cityRoute(alert);
    acc[route] = (acc[route] || 0) + 1;
    return acc;
  }, {});

  document.querySelector("#topRoutes").innerHTML = Object.entries(routeCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([route, count]) => `<li><span>${route}</span><strong>${count} alerts</strong></li>`)
    .join("");

  const reasons = alerts.flatMap((alert) => alert.reasons.map(([code]) => code));
  const reasonCounts = reasons.reduce((acc, code) => {
    acc[code] = (acc[code] || 0) + 1;
    return acc;
  }, {});

  document.querySelector("#topReasons").innerHTML = Object.entries(reasonCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([code, count]) => `<li><span>${code}</span><strong>${count}</strong></li>`)
    .join("");

  drawTrendChart();
}

function drawBarChart(canvas, values, labels, color) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fafafa";
  ctx.fillRect(0, 0, width, height);

  const max = Math.max(...values, 1);
  const padding = 36;
  const barGap = 18;
  const barWidth = (width - padding * 2 - barGap * (values.length - 1)) / values.length;

  ctx.strokeStyle = "#e4e4e7";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = padding + i * ((height - padding * 2) / 3);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  values.forEach((value, index) => {
    const barHeight = (value / max) * (height - padding * 2);
    const x = padding + index * (barWidth + barGap);
    const y = height - padding - barHeight;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "#18181b";
    ctx.font = "700 14px Inter, sans-serif";
    ctx.fillText(String(value), x + 4, y - 8);
    ctx.fillStyle = "#71717a";
    ctx.font = "12px Inter, sans-serif";
    ctx.fillText(labels[index], x, height - 12);
  });
}

function drawTrendChart() {
  const canvas = document.querySelector("#trendChart");
  if (!canvas) return;
  drawBarChart(canvas, [12, 18, 21, 16, 26, 31, 29], ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"], "#0891b2");
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => dom.toast.classList.remove("show"), 2200);
}

function setView(view) {
  state.view = view;
  const titles = {
    alerts: "Suspicious Inventory Alerts",
    suppliers: "Suppliers",
    reports: "Daily Fraud Digest"
  };

  dom.viewTitle.textContent = titles[view];
  dom.views.forEach((section) => section.classList.toggle("active", section.id === `${view}View`));
  dom.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));

  if (view === "suppliers") renderSuppliers();
  if (view === "reports") renderReports();
}

function bindEvents() {
  dom.navItems.forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));

  dom.datePickerButton.addEventListener("click", () => {
    const isOpen = !dom.datePickerPanel.hidden;
    dom.datePickerPanel.hidden = isOpen;
    dom.datePickerButton.setAttribute("aria-expanded", String(!isOpen));
  });

  dom.clearDateFilter.addEventListener("click", () => {
    state.filters.advertisedStartDate = "";
    state.filters.advertisedEndDate = "";
    resetPagination();
    closeCalendar();
    renderCalendar();
    renderQueue();
  });

  dom.prevMonthButton.addEventListener("click", () => moveCalendarMonth(-1));
  dom.nextMonthButton.addEventListener("click", () => moveCalendarMonth(1));
  dom.prevYearButton.addEventListener("click", () => moveCalendarYear(-1));
  dom.nextYearButton.addEventListener("click", () => moveCalendarYear(1));

  document.addEventListener("click", (event) => {
    if (dom.datePickerPanel.hidden) return;
    if (!event.target.closest(".calendar-filter")) closeCalendar();
  });

  dom.filterInputs.forEach((input) => {
    input.addEventListener("input", () => {
      state.filters[input.dataset.filter] = input.value;
      resetPagination();
      if (input.id === "exactTolerance") {
        document.querySelector("#exactToleranceValue").textContent = `${input.value} min`;
      }
      if (input.dataset.filter === "originCity" || input.dataset.filter === "destinationCity") {
        renderFilterOptions();
      }
      renderQueue();
    });
  });

  dom.sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (state.sortBy === button.dataset.sort) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortBy = button.dataset.sort;
        state.sortDirection = "asc";
      }
      resetPagination();
      renderQueue();
    });
  });

  dom.prevPageButton.addEventListener("click", () => {
    state.currentPage -= 1;
    renderQueue();
  });

  dom.nextPageButton.addEventListener("click", () => {
    state.currentPage += 1;
    renderQueue();
  });

  dom.paginationPages.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (!pageButton) return;
    state.currentPage = Number(pageButton.dataset.page);
    renderQueue();
  });

  dom.alertRows.addEventListener("click", (event) => {
    const supplierButton = event.target.closest("[data-queue-supplier]");
    if (!supplierButton) return;
    openSupplierFromQueue(supplierButton.dataset.queueSupplier);
  });

  dom.supplierFilterInputs.forEach((input) => {
    const eventName = input.type === "search" ? "input" : "change";
    input.addEventListener(eventName, () => {
      if (input.type === "radio" && !input.checked) return;
      state.suppliers.filters[input.dataset.supplierFilter] = input.value;
      resetSupplierPagination();
      renderSuppliers();
    });
  });

  dom.supplierSortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (state.suppliers.sortBy === button.dataset.supplierSort) {
        state.suppliers.sortDirection = state.suppliers.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.suppliers.sortBy = button.dataset.supplierSort;
        state.suppliers.sortDirection = button.dataset.supplierSort === "name" ? "asc" : "desc";
      }
      resetSupplierPagination();
      renderSuppliers();
    });
  });

  dom.supplierPrevPageButton.addEventListener("click", () => {
    state.suppliers.currentPage -= 1;
    renderSuppliers();
  });

  dom.supplierNextPageButton.addEventListener("click", () => {
    state.suppliers.currentPage += 1;
    renderSuppliers();
  });

  dom.supplierPaginationPages.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-supplier-page]");
    if (!pageButton) return;
    state.suppliers.currentPage = Number(pageButton.dataset.supplierPage);
    renderSuppliers();
  });

  dom.supplierDatePickerButton.addEventListener("click", () => {
    const isOpen = !dom.supplierDatePickerPanel.hidden;
    dom.supplierDatePickerPanel.hidden = isOpen;
    dom.supplierDatePickerButton.setAttribute("aria-expanded", String(!isOpen));
  });

  dom.supplierClearDateFilter.addEventListener("click", () => {
    state.suppliers.filters.advertisedStartDate = "";
    state.suppliers.filters.advertisedEndDate = "";
    resetSupplierPagination();
    closeSupplierCalendar();
    renderSupplierFilterOptions();
    renderSupplierCalendar();
    renderSuppliers();
  });

  dom.supplierPrevMonthButton.addEventListener("click", () => moveSupplierCalendarMonth(-1));
  dom.supplierNextMonthButton.addEventListener("click", () => moveSupplierCalendarMonth(1));
  dom.supplierPrevYearButton.addEventListener("click", () => moveSupplierCalendarYear(-1));
  dom.supplierNextYearButton.addEventListener("click", () => moveSupplierCalendarYear(1));

  document.addEventListener("click", (event) => {
    if (dom.supplierDatePickerPanel.hidden) return;
    if (!event.target.closest(".supplier-date-filter")) closeSupplierCalendar();
  });

  dom.supplierRows.addEventListener("click", (event) => {
    const row = event.target.closest("[data-supplier]");
    if (!row) return;
    state.suppliers.selectedSupplier = row.dataset.supplier;
    renderSuppliers();
  });

  dom.supplierRows.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const row = event.target.closest("[data-supplier]");
    if (!row) return;
    event.preventDefault();
    state.suppliers.selectedSupplier = row.dataset.supplier;
    renderSuppliers();
  });

  document.querySelector("#refreshButton").addEventListener("click", () => {
    showToast("Inventory and license feeds refreshed.");
  });

  document.querySelector("#exportButton").addEventListener("click", () => {
    const csvRows = [
      ["Alert ID", "Inventory ID", "Origin City", "Origin Airport", "Destination City", "Destination Airport", "City Route", "Airport Route", "Airline", "Flight No", "Date", "Advertised Time", "License Time", "Trip Type", "Flight Type", "Supplier", "Error Code", "Error Note"],
      ...filteredAlerts().map((alert) => {
        const error = primaryError(alert);
        return [
          alert.id,
          alert.inventoryId,
          alert.originCity,
          alert.originAirport,
          alert.destinationCity,
          alert.destinationAirport,
          cityRoute(alert),
          airportRoute(alert),
          alert.airline,
          alert.flightNo,
          alert.dateIso,
          alert.advertisedTime,
          alert.licensedTime,
          alert.tripType,
          alert.flightScope,
          alert.supplier,
          error.code,
          error.note
        ];
      })
    ];
    const csv = csvRows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "fraud-alert-queue.csv";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Current queue exported.");
  });
}

function init() {
  renderFilterOptions();
  renderSupplierFilterOptions();
  renderCalendar();
  renderSupplierCalendar();
  bindEvents();
  renderKpis();
  renderQueue();
}

init();
