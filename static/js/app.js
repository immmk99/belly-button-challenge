// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let metadataFiltered = metadata.filter((d) => d.id == sample);
    let sampleResult = metadataFiltered[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let metadataD = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    metadataD.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (key in sampleResult) {
      metadataD.append("h5").text(`${key.toUpperCase()}: ${result[key]}`);
    }

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let sampleData = samples.filter(result => result.id == sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = sampleData.otu_ids;
    let otu_labels = sampleData.otu_labels;
    let sample_values = sampleData.sample_values;

    // Build a Bubble Chart
    let traceBubble = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,

      markers: {
        color: otu_ids,
        size: sample_values,
        colorscale: "Earth"
      }
    }

    let bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: {
        title: "OTU ID"
      },
      hovermode: "closest"
    }

    // Render the Bubble Chart
    Plotly.newPlot("bubble", traceBubble, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticksData = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let traceBar = {
      x: sample_values.slice(0,10).reverse(),
      y: yticksData,
      type: "bar",
      orientation: "h",
      text: otu_labels.slice(0,10). reverse()
    };

    let barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    }

    // Render the Bar Chart
    Plotly.newPlot("bar", traceBar, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let samplesNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropDown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < samplesNames.length; i++) {
      dropDown.append("option").text(samplesNames[i]).property("value, names[i");
    }

    // Get the first sample from the list
    let firstSample = samplesNames[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
