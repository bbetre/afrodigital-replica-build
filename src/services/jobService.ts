export interface JobApplication {
    name: string;
    email: string;
    phone?: string;
    resume: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
    message?: string;
    jobTitle?: string;
    experience?: string;
    availability?: string;
}

export const submitJobApplication = async (data: JobApplication) => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    if (!formId) {
        console.error("Formspree Form ID is missing. Please set VITE_FORMSPREE_FORM_ID in your .env file.");
        throw new Error("Configuration error: Form ID missing");
    }

    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Form submission failed");
        }

        return { success: true };
    } catch (error) {
        console.error("Failed to submit application:", error);
        throw error;
    }
};
