**Product Filtering for WordPress with Elementor Pro**

This repository contains the code and instructions to implement product filtering on a WordPress website using Elementor Pro. The filtering is based on four types of segregation and is implemented using custom HTML and JavaScript.

**Introduction**
This project provides a solution for filtering products on a WordPress website built with Elementor Pro. The products are displayed in a two-column layout, and each product is assigned a class name based on its category. The filtering is handled by a custom script that toggles the visibility of products based on the selected category.

**Features**

Filter products based on predefined categories.
Easy integration with Elementor Pro.
Customizable class names for different product categories.
Responsive two-column layout for product display.

**Requirements**
WordPress (latest version)
Elementor Pro (latest version)

**Usage**

Create Products in Elementor Pro

Create a new section in Elementor Pro.
Add a two-column layout.
For each product, add an HTML element and include the product details.
Assign a class name to each product based on its category (e.g., Chemical, Industry).
Add Custom HTML and Script

Copy the provided HTML and JavaScript code from this repository.
Paste the HTML code into the appropriate section in Elementor.
Add the JavaScript code to the Custom HTML or Custom Code section in Elementor.

**Explanation**

HTML Structure: The HTML file includes checkboxes for different categories, product types, applications, and sectors. Each checkbox has a value corresponding to the class name used for filtering products.

CSS: Basic styling is applied to the checkboxes and labels to ensure they are displayed correctly.

JavaScript: The JavaScript (jQuery) code listens for changes on the checkboxes. When a checkbox is checked or unchecked, it updates the visibility of the products based on the selected filters.

Selectors: The code uses jQuery to select the checkboxes and get their values.
Filter Logic: The code hides all products initially and then shows only those products that match the selected filters. If no filters are selected, all products are shown.

**Customization**
Class Names: Modify the class names in the HTML to match your product categories.
Styling: Customize the CSS to change the appearance of the product layout and filter buttons.
Filter Logic: Adjust the JavaScript logic to add more complex filtering criteria if needed.

**Contributing**
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
