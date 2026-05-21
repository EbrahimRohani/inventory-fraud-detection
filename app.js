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

const suppliers = [
  {
    name: "Aseman Charter Co.",
    activeAlerts: 2,
    confirmedCases: 4,
    shiftRate: "34%",
    supportRate: "18%",
    trend: "Rising"
  },
  {
    name: "Kavir Charter",
    activeAlerts: 1,
    confirmedCases: 3,
    shiftRate: "31%",
    supportRate: "14%",
    trend: "Rising"
  },
  {
    name: "Pars Sky Supply",
    activeAlerts: 1,
    confirmedCases: 2,
    shiftRate: "22%",
    supportRate: "10%",
    trend: "Stable"
  },
  {
    name: "Mehr Air Desk",
    activeAlerts: 1,
    confirmedCases: 1,
    shiftRate: "18%",
    supportRate: "7%",
    trend: "Stable"
  },
  {
    name: "Shomal Ticket Hub",
    activeAlerts: 1,
    confirmedCases: 1,
    shiftRate: "9%",
    supportRate: "4%",
    trend: "Watch"
  }
];

const state = {
  view: "alerts",
  sortBy: "advertised",
  calendarMonth: alerts[0].dateIso.slice(0, 7),
  filters: {
    date: "",
    originCity: "",
    originAirport: "",
    destinationCity: "",
    destinationAirport: "",
    tripType: "",
    exactTolerance: "15"
  }
};

const dom = {
  viewTitle: document.querySelector("#viewTitle"),
  views: document.querySelectorAll(".view"),
  navItems: document.querySelectorAll(".nav-item"),
  filterInputs: document.querySelectorAll("[data-filter]"),
  sortSelect: document.querySelector("#sortSelect"),
  alertRows: document.querySelector("#alertRows"),
  queueSummary: document.querySelector("#queueSummary"),
  datePickerButton: document.querySelector("#datePickerButton"),
  datePickerLabel: document.querySelector("#datePickerLabel"),
  datePickerPanel: document.querySelector("#datePickerPanel"),
  calendarMonthLabel: document.querySelector("#calendarMonthLabel"),
  calendarGrid: document.querySelector("#calendarGrid"),
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

function renderCalendar() {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const monthIndex = month - 1;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  dom.calendarMonthLabel.textContent = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric"
  }).format(new Date(year, monthIndex, 1));
  dom.datePickerLabel.textContent = formatDateLabel(state.filters.date);

  const blanks = Array.from({ length: firstDay }, () => '<span class="calendar-empty"></span>');
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const dateIso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const hasAlerts = availableDates.has(dateIso);
    const active = state.filters.date === dateIso;
    return `
      <button class="${active ? "active" : ""}" type="button" data-date="${dateIso}" ${hasAlerts ? "" : "disabled"}>
        ${day}
      </button>
    `;
  });

  dom.calendarGrid.innerHTML = [...blanks, ...days].join("");
  dom.calendarGrid.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters.date = button.dataset.date;
      closeCalendar();
      renderCalendar();
      renderQueue();
    });
  });
}

function closeCalendar() {
  dom.datePickerPanel.hidden = true;
  dom.datePickerButton.setAttribute("aria-expanded", "false");
}

function primaryError(alert) {
  const [code, note] = alert.reasons[0];
  return { code, note };
}

function filteredAlerts() {
  const tolerance = Number(state.filters.exactTolerance);

  return alerts
    .filter((alert) => {
      const matchesDate = !state.filters.date || alert.dateIso === state.filters.date;
      const matchesOriginCity = !state.filters.originCity || alert.originCity === state.filters.originCity;
      const matchesOriginAirport = !state.filters.originAirport || alert.originAirport === state.filters.originAirport;
      const matchesDestinationCity = !state.filters.destinationCity || alert.destinationCity === state.filters.destinationCity;
      const matchesDestinationAirport = !state.filters.destinationAirport || alert.destinationAirport === state.filters.destinationAirport;
      const matchesTripType = !state.filters.tripType || alert.tripType === state.filters.tripType;
      const outsideTolerance = licenseGapMinutes(alert) > tolerance;

      return (
        matchesDate &&
        matchesOriginCity &&
        matchesOriginAirport &&
        matchesDestinationCity &&
        matchesDestinationAirport &&
        matchesTripType &&
        outsideTolerance
      );
    })
    .sort((a, b) => {
      if (state.sortBy === "inventory") return collator.compare(`${cityRoute(a)} ${airportRoute(a)} ${a.inventoryId}`, `${cityRoute(b)} ${airportRoute(b)} ${b.inventoryId}`);
      if (state.sortBy === "license") return timeToMinutes(a.licensedTime) - timeToMinutes(b.licensedTime);
      if (state.sortBy === "tripType") return collator.compare(a.tripType, b.tripType);
      if (state.sortBy === "supplier") return collator.compare(a.supplier, b.supplier);
      if (state.sortBy === "error") return collator.compare(primaryError(a).code, primaryError(b).code);
      return `${a.dateIso} ${a.advertisedTime}`.localeCompare(`${b.dateIso} ${b.advertisedTime}`);
    });
}

function renderKpis() {
  document.querySelector("#alertCount").textContent = alerts.length;
  document.querySelector("#nearDepartureCount").textContent = alerts.filter((alert) => alert.departureHours <= 24).length;
}

function renderQueue() {
  const rows = filteredAlerts();
  dom.queueSummary.textContent = `${rows.length} matching ${rows.length === 1 ? "alert" : "alerts"}`;

  if (!rows.length) {
    dom.alertRows.innerHTML = '<tr><td colspan="6" class="empty-row">No alerts match the selected filters.</td></tr>';
    return;
  }

  dom.alertRows.innerHTML = rows
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
            <span class="supplier-title">${alert.supplier}</span>
            <span class="meta-line">${alert.agency}</span>
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

function renderSuppliers() {
  document.querySelector("#supplierGrid").innerHTML = suppliers
    .map(
      (supplier) => `
        <article class="supplier-card">
          <header>
            <div>
              <h4>${supplier.name}</h4>
              <span class="meta-line">${supplier.trend} alert trend</span>
            </div>
          </header>
          <div class="supplier-stats">
            <div><span>Active alerts</span><strong>${supplier.activeAlerts}</strong></div>
            <div><span>Confirmed cases</span><strong>${supplier.confirmedCases}</strong></div>
            <div><span>Time-shift rate</span><strong>${supplier.shiftRate}</strong></div>
            <div><span>Support contact rate</span><strong>${supplier.supportRate}</strong></div>
          </div>
          <button class="secondary-button supplier-file" type="button" data-supplier="${supplier.name}">Open supplier file</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".supplier-file").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.supplier} supplier file opened.`));
  });
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
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const max = Math.max(...values, 1);
  const padding = 36;
  const barGap = 18;
  const barWidth = (width - padding * 2 - barGap * (values.length - 1)) / values.length;

  ctx.strokeStyle = "#dbe3e7";
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
    ctx.fillStyle = "#172026";
    ctx.font = "700 14px Inter, sans-serif";
    ctx.fillText(String(value), x + 4, y - 8);
    ctx.fillStyle = "#64727b";
    ctx.font = "12px Inter, sans-serif";
    ctx.fillText(labels[index], x, height - 12);
  });
}

function drawTrendChart() {
  const canvas = document.querySelector("#trendChart");
  if (!canvas) return;
  drawBarChart(canvas, [12, 18, 21, 16, 26, 31, 29], ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"], "#c26a14");
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
    suppliers: "Supplier History Board",
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
    state.filters.date = "";
    closeCalendar();
    renderCalendar();
    renderQueue();
  });

  document.addEventListener("click", (event) => {
    if (dom.datePickerPanel.hidden) return;
    if (!event.target.closest(".calendar-filter")) closeCalendar();
  });

  dom.filterInputs.forEach((input) => {
    input.addEventListener("input", () => {
      state.filters[input.dataset.filter] = input.value;
      if (input.id === "exactTolerance") {
        document.querySelector("#exactToleranceValue").textContent = `${input.value} min`;
      }
      if (input.dataset.filter === "originCity" || input.dataset.filter === "destinationCity") {
        renderFilterOptions();
      }
      renderQueue();
    });
  });

  dom.sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderQueue();
  });

  document.querySelector("#refreshButton").addEventListener("click", () => {
    showToast("Inventory and license feeds refreshed.");
  });

  document.querySelector("#exportButton").addEventListener("click", () => {
    const csvRows = [
      ["Alert ID", "Inventory ID", "Origin City", "Origin Airport", "Destination City", "Destination Airport", "City Route", "Airport Route", "Airline", "Flight No", "Date", "Advertised Time", "License Time", "Trip Type", "Supplier", "Error Code", "Error Note"],
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
  renderCalendar();
  bindEvents();
  renderKpis();
  renderQueue();
}

init();
