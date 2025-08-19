
import { toast } from "sonner";

export const downloadResume = () => {
  try {
    // Create a link element for downloading
    const link = document.createElement('a');
    link.href = '/Veginati_Chaithanya_Resume.pdf';
    link.download = 'Veginati_Chaithanya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success toast
    toast.success("Resume download started successfully!");
  } catch (error) {
    console.error('Error downloading resume:', error);
    toast.error("Failed to download resume. Please try again.");
  }
};

export const previewResume = () => {
  try {
    // Open resume in new tab for preview
    window.open('/Veginati_Chaithanya_Resume.pdf', '_blank');
    toast.success("Opening resume preview...");
  } catch (error) {
    console.error('Error opening resume preview:', error);
    toast.error("Failed to open resume preview. Please try again.");
  }
};
