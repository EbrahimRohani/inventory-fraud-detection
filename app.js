const alerts = [
  {
    id: "AL-1024",
    inventoryId: "INV-IR-88421",
    airline: "Iran Air",
    flightNo: "IR-431",
    route: "THR -> MHD",
    origin: "THR",
    destination: "MHD",
    date: "20 May",
    advertisedTime: "08:00",
    licensedTime: "10:00",
    supplier: "Aseman Charter Co.",
    agency: "Agency 1187",
    score: 91,
    risk: "Critical",
    bookings: 18,
    status: "New",
    createdMinutesAgo: 34,
    departureHours: 7,
    reasons: [
      ["NO_LICENSE_MATCH", 40, "No exact license exists for Iran Air at 08:00 on THR -> MHD."],
      ["NEAR_REAL_FLIGHT_TIME", 25, "Advertised time is 120 minutes before a licensed Iran Air flight."],
      ["MULTIPLE_SHADOW_TIMES", 16, "Same supplier also lists 12:00 around the 10:00 licensed flight."],
      ["SUPPLIER_HISTORY_RISK", 10, "Four confirmed fake inventory cases in the last 90 days."]
    ],
    timeline: [
      ["09:08", "Inventory opened", "18 seats listed with fixed availability."],
      ["09:16", "License check failed", "No matching license for the advertised departure time."],
      ["09:21", "Shadow pattern found", "Nearest licensed flight is Iran Air 10:00."],
      ["09:42", "Bookings detected", "18 passengers currently exposed."]
    ]
  },
  {
    id: "AL-1025",
    inventoryId: "INV-IR-88433",
    airline: "Iran Air",
    flightNo: "IR-431",
    route: "THR -> MHD",
    origin: "THR",
    destination: "MHD",
    date: "20 May",
    advertisedTime: "12:00",
    licensedTime: "10:00",
    supplier: "Aseman Charter Co.",
    agency: "Agency 1187",
    score: 86,
    risk: "Critical",
    bookings: 11,
    status: "In review",
    createdMinutesAgo: 39,
    departureHours: 9,
    reasons: [
      ["NO_LICENSE_MATCH", 40, "No license record supports a 12:00 departure."],
      ["NEAR_REAL_FLIGHT_TIME", 25, "Time is 120 minutes after a valid Iran Air flight."],
      ["MULTIPLE_SHADOW_TIMES", 16, "Two fake times surround one licensed operation."],
      ["MISSING_OR_INVALID_FLIGHT_NUMBER", 5, "Flight number reused outside license time."]
    ],
    timeline: [
      ["09:03", "Inventory opened", "Inventory copied price and baggage from licensed flight."],
      ["09:15", "Related alert linked", "Matched to AL-1024 by supplier, route, airline, and date."],
      ["09:29", "Review started", "Supply team assigned case."],
      ["09:44", "Passenger exposure updated", "11 bookings attached to inventory."]
    ]
  },
  {
    id: "AL-1026",
    inventoryId: "INV-QB-55318",
    airline: "Qeshm Air",
    flightNo: "QB-1206",
    route: "IFN -> THR",
    origin: "IFN",
    destination: "THR",
    date: "20 May",
    advertisedTime: "15:45",
    licensedTime: "17:05",
    supplier: "Pars Sky Supply",
    agency: "Agency 2044",
    score: 78,
    risk: "High",
    bookings: 6,
    status: "New",
    createdMinutesAgo: 66,
    departureHours: 12,
    reasons: [
      ["NO_LICENSE_MATCH", 35, "License feed has no 15:45 Qeshm Air operation."],
      ["NEAR_REAL_FLIGHT_TIME", 24, "Advertised time is near a licensed 17:05 flight."],
      ["SUSPICIOUS_SEAT_AVAILABILITY", 9, "Seat count has remained exactly 9 for six snapshots."],
      ["SUPPLIER_HISTORY_RISK", 10, "Supplier has two confirmed route-time shifts."]
    ],
    timeline: [
      ["08:32", "Inventory opened", "Nine seats published on B2C and B2B channels."],
      ["08:46", "License miss", "No exact flight license found."],
      ["09:10", "Availability anomaly", "Fixed seat count across repeated checks."],
      ["09:41", "Alert created", "Score crossed review threshold."]
    ]
  },
  {
    id: "AL-1027",
    inventoryId: "INV-ZV-22091",
    airline: "Zagros Airlines",
    flightNo: "ZV-4102",
    route: "SYZ -> MHD",
    origin: "SYZ",
    destination: "MHD",
    date: "21 May",
    advertisedTime: "06:20",
    licensedTime: "08:00",
    supplier: "Mehr Air Desk",
    agency: "Agency 3310",
    score: 72,
    risk: "High",
    bookings: 3,
    status: "New",
    createdMinutesAgo: 92,
    departureHours: 22,
    reasons: [
      ["NO_LICENSE_MATCH", 40, "No licensed Zagros flight at 06:20."],
      ["NEAR_REAL_FLIGHT_TIME", 22, "Advertised time is 100 minutes from a licensed flight."],
      ["MISSING_OR_INVALID_FLIGHT_NUMBER", 10, "Flight number is not present in license source."]
    ],
    timeline: [
      ["08:03", "Inventory opened", "Published after licensed 08:00 flight appeared."],
      ["08:30", "Flight number check failed", "Flight number not found in route license list."],
      ["09:31", "Alert created", "High-risk score generated."]
    ]
  },
  {
    id: "AL-1028",
    inventoryId: "INV-IV-14018",
    airline: "Caspian Airlines",
    flightNo: "CPN-692",
    route: "AWZ -> THR",
    origin: "AWZ",
    destination: "THR",
    date: "21 May",
    advertisedTime: "19:10",
    licensedTime: "19:30",
    supplier: "Shomal Ticket Hub",
    agency: "Agency 1710",
    score: 54,
    risk: "Medium",
    bookings: 0,
    status: "New",
    createdMinutesAgo: 18,
    departureHours: 31,
    reasons: [
      ["NEAR_REAL_FLIGHT_TIME", 18, "Advertised time is close to a licensed operation."],
      ["AMBIGUOUS_LICENSE_MATCH", 18, "Two similar license records need review."],
      ["SUSPICIOUS_SEAT_AVAILABILITY", 8, "Availability is unchanged after five supplier polls."],
      ["SUPPLIER_HISTORY_RISK", 10, "One prior confirmed case in the last 90 days."]
    ],
    timeline: [
      ["09:24", "Inventory opened", "No bookings yet."],
      ["09:31", "Ambiguous match", "License times 19:30 and 20:05 both nearby."],
      ["09:42", "Medium alert created", "Monitoring until booking or supplier update."]
    ]
  },
  {
    id: "AL-1029",
    inventoryId: "INV-EP-77401",
    airline: "Aseman Airlines",
    flightNo: "EP-3845",
    route: "TBZ -> THR",
    origin: "TBZ",
    destination: "THR",
    date: "21 May",
    advertisedTime: "11:30",
    licensedTime: "13:00",
    supplier: "Kavir Charter",
    agency: "Agency 0920",
    score: 81,
    risk: "Critical",
    bookings: 9,
    status: "Needs supplier clarification",
    createdMinutesAgo: 128,
    departureHours: 26,
    reasons: [
      ["NO_LICENSE_MATCH", 40, "No Aseman license for 11:30 on this route."],
      ["LAST_MINUTE_TIME_CHANGE_PATTERN", 22, "Supplier moved 31 percent of prior bookings to licensed times."],
      ["SUPPLIER_HISTORY_RISK", 14, "Three confirmed fake cases in the last 90 days."],
      ["SUSPICIOUS_SEAT_AVAILABILITY", 5, "Constant seat count across snapshots."]
    ],
    timeline: [
      ["07:34", "Inventory opened", "B2B and B2C inventory published together."],
      ["08:11", "Historical pattern matched", "Supplier has repeated time-shift behavior."],
      ["09:06", "Clarification requested", "Supply team asked supplier for license proof."],
      ["09:42", "Bookings updated", "Nine active bookings attached."]
    ]
  }
];

const suppliers = [
  {
    name: "Aseman Charter Co.",
    score: 88,
    activeAlerts: 2,
    confirmedCases: 4,
    shiftRate: "34%",
    supportRate: "18%",
    trend: "Rising"
  },
  {
    name: "Kavir Charter",
    score: 81,
    activeAlerts: 1,
    confirmedCases: 3,
    shiftRate: "31%",
    supportRate: "14%",
    trend: "Rising"
  },
  {
    name: "Pars Sky Supply",
    score: 74,
    activeAlerts: 1,
    confirmedCases: 2,
    shiftRate: "22%",
    supportRate: "10%",
    trend: "Stable"
  },
  {
    name: "Mehr Air Desk",
    score: 69,
    activeAlerts: 1,
    confirmedCases: 1,
    shiftRate: "18%",
    supportRate: "7%",
    trend: "Stable"
  },
  {
    name: "Shomal Ticket Hub",
    score: 48,
    activeAlerts: 1,
    confirmedCases: 1,
    shiftRate: "9%",
    supportRate: "4%",
    trend: "Watch"
  }
];

const state = {
  view: "alerts",
  selectedRisk: "all",
  selectedAlertId: alerts[0].id,
  hideReviewed: true,
  sortBy: "score",
  search: ""
};

const dom = {
  viewTitle: document.querySelector("#viewTitle"),
  views: document.querySelectorAll(".view"),
  navItems: document.querySelectorAll(".nav-item"),
  searchInput: document.querySelector("#searchInput"),
  riskSegments: document.querySelectorAll(".segment"),
  hideReviewedToggle: document.querySelector("#hideReviewedToggle"),
  sortSelect: document.querySelector("#sortSelect"),
  alertRows: document.querySelector("#alertRows"),
  queueSummary: document.querySelector("#queueSummary"),
  detailEmpty: document.querySelector("#detailEmpty"),
  detailContent: document.querySelector("#detailContent"),
  toast: document.querySelector("#toast")
};

function filteredAlerts() {
  const term = state.search.trim().toLowerCase();

  return alerts
    .filter((alert) => {
      const matchesRisk = state.selectedRisk === "all" || alert.risk === state.selectedRisk;
      const searchable = `${alert.route} ${alert.airline} ${alert.supplier} ${alert.inventoryId} ${alert.flightNo}`.toLowerCase();
      const matchesSearch = !term || searchable.includes(term);
      const isResolved = alert.status === "False positive" || alert.status === "Confirmed fake";
      const matchesStatus = !state.hideReviewed || !isResolved;
      return matchesRisk && matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (state.sortBy === "departure") return a.departureHours - b.departureHours;
      if (state.sortBy === "bookings") return b.bookings - a.bookings;
      if (state.sortBy === "created") return a.createdMinutesAgo - b.createdMinutesAgo;
      return b.score - a.score;
    });
}

function renderKpis() {
  const active = alerts.filter((alert) => alert.status !== "False positive");
  document.querySelector("#criticalCount").textContent = active.filter((alert) => alert.risk === "Critical" && alert.departureHours <= 24).length;
  document.querySelector("#highCount").textContent = active.filter((alert) => alert.risk === "High").length;
  document.querySelector("#bookingCount").textContent = active.reduce((sum, alert) => sum + alert.bookings, 0);
  document.querySelector("#repeatSupplierCount").textContent = suppliers.filter((supplier) => supplier.confirmedCases >= 2).length;
}

function statusClass(status) {
  if (status === "Confirmed fake") return "confirmed";
  if (status === "In review" || status === "Needs supplier clarification") return "review";
  if (status === "False positive") return "false";
  return "";
}

function renderQueue() {
  const rows = filteredAlerts();
  dom.queueSummary.textContent = `${rows.length} active alerts`;

  dom.alertRows.innerHTML = rows
    .map(
      (alert) => `
        <tr class="${alert.id === state.selectedAlertId ? "selected" : ""}" data-alert-id="${alert.id}">
          <td>
            <div class="risk-cell">
              <span class="risk-dot ${alert.risk}"></span>
              <span class="score-badge">${alert.score}</span>
            </div>
          </td>
          <td>
            <span class="route-title">${alert.route}</span>
            <span class="meta-line">${alert.airline} ${alert.flightNo} | ${alert.inventoryId}</span>
          </td>
          <td>
            <span class="route-title">${alert.date}, ${alert.advertisedTime}</span>
            <span class="meta-line">${alert.bookings} affected bookings</span>
          </td>
          <td>
            <span class="route-title">${alert.licensedTime}</span>
            <span class="meta-line">Same airline, route, date</span>
          </td>
          <td>
            <span class="supplier-title">${alert.supplier}</span>
            <span class="meta-line">${alert.agency}</span>
          </td>
          <td><span class="status-chip ${statusClass(alert.status)}">${alert.status}</span></td>
        </tr>
      `
    )
    .join("");

  document.querySelectorAll("[data-alert-id]").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedAlertId = row.dataset.alertId;
      renderQueue();
      renderDetail();
    });
  });
}

function selectedAlert() {
  return alerts.find((alert) => alert.id === state.selectedAlertId) || filteredAlerts()[0];
}

function renderDetail() {
  const alert = selectedAlert();
  if (!alert) {
    dom.detailEmpty.classList.remove("hidden");
    dom.detailContent.classList.add("hidden");
    return;
  }

  state.selectedAlertId = alert.id;
  dom.detailEmpty.classList.add("hidden");
  dom.detailContent.classList.remove("hidden");

  document.querySelector("#detailRisk").textContent = alert.risk;
  document.querySelector("#detailRisk").className = `risk-pill ${alert.risk}`;
  document.querySelector("#detailTitle").textContent = alert.route;
  document.querySelector("#detailSubtitle").textContent = `${alert.airline} ${alert.flightNo} | ${alert.date}`;
  document.querySelector("#detailScore").textContent = alert.score;
  document.querySelector("#advertisedTime").textContent = alert.advertisedTime;
  document.querySelector("#licensedTime").textContent = alert.licensedTime;
  document.querySelector("#affectedBookings").textContent = alert.bookings;
  document.querySelector("#supplierHistory").textContent = `${suppliers.find((supplier) => supplier.name === alert.supplier)?.confirmedCases || 0} cases`;
  document.querySelector("#alertAge").textContent = `${alert.createdMinutesAgo}m old`;
  document.querySelector("#decisionState").textContent = alert.status;

  document.querySelector("#scoreBreakdown").innerHTML = alert.reasons
    .map(
      ([code, points, note]) => `
        <div class="score-item">
          <div>
            <strong>${code}</strong>
            <span>${note}</span>
          </div>
          <strong>+${points}</strong>
        </div>
      `
    )
    .join("");

  document.querySelector("#timelineList").innerHTML = alert.timeline
    .map(
      ([time, title, note]) => `
        <li>
          <strong>${time} - ${title}</strong>
          <span>${note}</span>
        </li>
      `
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
              <span class="meta-line">${supplier.trend} risk trend</span>
            </div>
            <span class="score-badge">${supplier.score}</span>
          </header>
          <div class="supplier-stats">
            <div><span>Active alerts</span><strong>${supplier.activeAlerts}</strong></div>
            <div><span>Confirmed cases</span><strong>${supplier.confirmedCases}</strong></div>
            <div><span>Time-shift rate</span><strong>${supplier.shiftRate}</strong></div>
            <div><span>Support contact rate</span><strong>${supplier.supportRate}</strong></div>
          </div>
          <button class="secondary-button supplier-review" type="button" data-supplier="${supplier.name}">Open supplier file</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".supplier-review").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.supplier} supplier file opened in review mode.`));
  });
}

function renderReports() {
  const routeCounts = alerts.reduce((acc, alert) => {
    acc[alert.route] = (acc[alert.route] || 0) + 1;
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

function drawRuleChart() {
  const canvas = document.querySelector("#ruleChart");
  if (!canvas) return;

  const exact = Number(document.querySelector("#exactTolerance").value);
  const shadow = Number(document.querySelector("#shadowWindow").value);
  const threshold = Number(document.querySelector("#reviewThreshold").value);
  const values = [
    Math.round(exact * 1.4),
    Math.round(shadow * 12),
    threshold,
    alerts.filter((alert) => alert.score >= threshold).length * 15
  ];

  drawBarChart(canvas, values, ["Tolerance", "Window", "Threshold", "Alerts"], "#087f8c");
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
    suppliers: "Supplier Risk Board",
    rules: "Detection Rule Lab",
    reports: "Daily Fraud Digest"
  };

  dom.viewTitle.textContent = titles[view];
  dom.views.forEach((section) => section.classList.toggle("active", section.id === `${view}View`));
  dom.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));

  if (view === "suppliers") renderSuppliers();
  if (view === "rules") drawRuleChart();
  if (view === "reports") renderReports();
}

function bindEvents() {
  dom.navItems.forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));

  dom.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderQueue();
    renderDetail();
  });

  dom.riskSegments.forEach((segment) => {
    segment.addEventListener("click", () => {
      state.selectedRisk = segment.dataset.risk;
      dom.riskSegments.forEach((button) => button.classList.toggle("active", button === segment));
      renderQueue();
      renderDetail();
    });
  });

  dom.hideReviewedToggle.addEventListener("change", (event) => {
    state.hideReviewed = event.target.checked;
    renderQueue();
    renderDetail();
  });

  dom.sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderQueue();
  });

  document.querySelector("#refreshButton").addEventListener("click", () => {
    showToast("Risk scores refreshed from inventory and license feeds.");
  });

  document.querySelector("#exportButton").addEventListener("click", () => {
    const csvRows = [
      ["Alert ID", "Inventory ID", "Route", "Airline", "Supplier", "Score", "Risk", "Status"],
      ...filteredAlerts().map((alert) => [
        alert.id,
        alert.inventoryId,
        alert.route,
        alert.airline,
        alert.supplier,
        alert.score,
        alert.risk,
        alert.status
      ])
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

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const alert = selectedAlert();
      alert.status = button.dataset.action;
      renderQueue();
      renderDetail();
      showToast(`${alert.id} marked as ${alert.status}.`);
    });
  });

  ["exactTolerance", "shadowWindow", "reviewThreshold"].forEach((id) => {
    const input = document.querySelector(`#${id}`);
    const output = document.querySelector(`#${id}Value`);
    input.addEventListener("input", () => {
      output.textContent = id === "shadowWindow" ? `${input.value} h` : id === "exactTolerance" ? `${input.value} min` : input.value;
      drawRuleChart();
    });
  });
}

function init() {
  bindEvents();
  renderKpis();
  renderQueue();
  renderDetail();
}

init();
