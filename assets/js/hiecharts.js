
//* High-chart JS
//* Gender wise Students
Highcharts.chart("genderWiseStudents", {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Gender wise students by Class",
  },
  xAxis: {
    categories: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  },
  yAxis: {
    min: 0,
    title: {
      text: "Number of Students",
    },
  },
  series: [
    {
      name: "Total Male",
      data: [30, 40, 35, 50, 45],
    },
    {
      name: "Total Female",
      data: [25, 30, 40, 30, 35],
    },
  ],
});

//* Old/New Students
Highcharts.chart("oldNewStudents", {
  credits: {
    enabled: false,
  },

  chart: {
    type: "column",
  },
  title: {
    text: "Old/New students by Class",
  },
  xAxis: {
    categories: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  },
  yAxis: {
    min: 0,
    title: {
      text: "Number of Students",
    },
  },
  series: [
    {
      name: "New Admissions",
      data: [10, 65, 40, 50, 45],
    },
    {
      name: "Old Admissions",
      data: [45, 5, 35, 30, 35],
    },
  ],
});

//* Total present/absent students date & class wise
let chart;
function createChart(data) {
  chart = Highcharts.chart("studentAttendance", {
    chart: {
      type: "column",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Total Present and Absent Students",
    },
    xAxis: {
      categories: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Students",
      },
    },
    series: [
      {
        name: "Present",
        data: data.present,
      },
      {
        name: "Absent",
        data: data.absent,
      },
    ],
  });
}

function updateChart() {
  const date = document.getElementById("dateFilter").value;

  //* Example data based on the selected date
  const attendanceData = {
    "2026-01-18": { present: [30, 40, 35, 50, 45], absent: [5, 10, 15, 5, 10] },
    "2026-01-19": { present: [25, 30, 40, 30, 35], absent: [10, 5, 5, 10, 15] },
    "2026-01-20": { present: [20, 35, 30, 40, 50], absent: [15, 5, 10, 5, 5] },
  };

  createChart(attendanceData[date] || { present: [], absent: [] });
}

//* Initialize the chart with the first date's data
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  document.getElementById("dateFilter").value = today;
  updateChart(); // Initialize the chart with today's data
});