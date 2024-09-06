import jsPDF from 'jspdf';

export const exportMealPlanAsPDF = (mealPlan) => {
    // Check if mealPlan is an array
    if (!Array.isArray(mealPlan)) {
        console.error("Invalid meal plan format. Expected an array.");
        return;
    }

    const doc = new jsPDF();

    // Set title for the PDF
    doc.setFontSize(16);
    doc.text("Meal Plan", 10, 20);

    // Add content to the PDF (meal plan details)
    doc.setFontSize(12);
    let y = 30; // Starting y-coordinate for text

    mealPlan.forEach((meal, index) => {
        // Check if each meal object has the expected structure
        if (meal && typeof meal.name === 'string' && Array.isArray(meal.items)) {
            doc.text(`Meal ${index + 1}: ${meal.name}`, 10, y);
            y += 10; // Adjust y-position for the next line

            meal.items.forEach((item) => {
                doc.text(`- ${item}`, 20, y);
                y += 8;
            });

            y += 10; // Extra space between meals
        } else {
            console.error(`Invalid meal format at index ${index}`);
        }
    });

    // Save the PDF
    doc.save("MealPlan.pdf");
};
