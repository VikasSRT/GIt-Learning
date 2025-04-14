const fields = {
    1: [
        { name: "firstname", type: "text", label: "Enter your firstname", required: true },
        { name: "lastname", type: "text", label: "Enter your lastname", required: true },
        { name: "email", type: "email", label: "Enter your email", required: true },
        { name: "phone", type: "tel", label: "Enter your phone", required: true },
        { name: "age", type: "number", label: "Enter your age", required: false },
        { name: "dob", type: "date", label: "", required: true },
    ],
    2: [
        { name: "qualification", type: "text", label: "Enter your qualification", required: true },
        { name: "gender", type: "radio", label: "Select your gender", options: ["male", "female", "other"], required: true },
        { name: "distanceFromHome", type: "range", label: "What's the distance from home", required: true, min: 1, max: 50 },
        { name: "currentYear", type: "select", label: "You are taking admission in which year?", options: ["First Year", "Second Year", "Third Year"], required: true },
        { name: "language", type: "checkbox", label: "Select the languages you know", options: ["hindi", "english", "gujarati"], required: true },
        { name: "gaps", type: "radio", label: "Have you took any gaps?", options: ["yes", "no"], required: true },
    ],
    3: [
        { name: "department", type: "select", label: "Select your department", options: ["Mechanical", "Electrical", "Computer Science"], required: true },
        { name: "fatherOccupation", type: "text", label: "Father's occupation", required: true },
        { name: "motherOccupation", type: "text", label: "Mother's occupation", required: true },
        { name: "studentType", type: "radio", label: "Are you a fulltime student", options: ["yes", "no"], required: true },
        { name: "secondaryNumber", type: "tel", label: "Any secondary number", required: true },
        { name: "recommend", type: "radio", label: "How often would you recommend us?", options: ["yes", "no"], required: true },
    ],
    4: [
        { name: "pic", type: "file", label: "", required: true },
        { name: "secondaryEmail", type: "email", label: "Any secondary email", required: true },
        { name: "sportInterests", type: "checkbox", label: "Which sports do you like", options: ["Football", "Cricket", "Volleyball"], required: false },
        { name: "satisfied", type: "radio", label: "Are you satisfied with this", options: ["yes", "no"], required: true },
        { name: "reference", type: "text", label: "Any reference", required: false },
        { name: "suggestions", type: "text", label: "any suggestions for us?", required: false },
    ],
}

export default fields