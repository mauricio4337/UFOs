// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data){
  // Clear out any existing data
  tbody.html("");

  // Loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow)) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the data row and
    // add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (data) {
    filteredData = filterData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // If no date entered for filtering, the original
  // table will be displayed
  buildTable(filteredData);
}

// Listen for event "click" on filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

