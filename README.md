**Belly Button Biodiversity Dashboard: Project Overview**

### Background
This project involves building an interactive dashboard to delve into the Belly Button Biodiversity dataset, which documents microbial species that inhabit human navels. The findings underscore that while a select few microbial species (operational taxonomic units or OTUs) are common among more than 70% of individuals, many are relatively rare.


### Dashboard Features and Functionality
- **Data Integration and Visualization**
  - Utilized the D3 library to fetch `samples.json` directly from a hosted URL.
  - Developed a horizontal bar chart with a dropdown menu that showcases the top 10 OTUs found in selected individuals, using `otu_ids` for labels, `sample_values` for bar lengths, and `otu_labels` for hover text.
  - Constructed a bubble chart to display each microbial sample, employing `otu_ids` for x-values, `sample_values` for y-values and marker size, with `otu_ids` dictating marker colors, and `otu_labels` providing text values.

- **Interactive and Responsive Design**
  - Integrated demographic information display that updates with each selected sample, presenting key data through dynamic HTML updates within the `#sample-metadata` panel.
  - Ensured that all plots and metadata dynamically update in response to new sample selections, maintaining a responsive and engaging user experience.

### Deployment and Documentation
- Successfully deployed the interactive dashboard via GitHub Pages, providing global access to the visualization tool.
- Maintained thorough documentation and regular commits on GitHub to detail the development process and ensure reproducibility and clarity for future enhancements.

### Conclusion
This dashboard serves as an educational and investigative tool, enhancing public understanding and scientific inquiry into the microbial diversity of human navels. It stands as a testament to the power of data visualization in conveying complex datasets in an accessible format.
