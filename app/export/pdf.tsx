import jsPDF from "jspdf";
const exportMealPlanAsPDF = (mealPlan: Array<{ name: string; items: string[] }>) => {
    const doc = new jsPDF();
  
    // Set title for the PDF
    doc.setFontSize(16);
    doc.text("Meal Plan", 10, 20);
  
    // Add content to the PDF (meal plan details)
    doc.setFontSize(12);
    let y = 30; // Starting y-coordinate for text
    mealPlan.forEach((meal, index) => {
      doc.text(`Meal ${index + 1}: ${meal.name}`, 10, y);
      y += 10; // Adjust y-position for the next line
      meal.items.forEach((item) => {
        doc.text(`- ${item}`, 20, y);
        y += 8;
      });
      y += 10; // Extra space between meals
    });
  
    // Save the PDF
    doc.save("MealPlan.pdf");
  };
  