export default {
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      summary: "",
      profilePicture: null,
      profilePicturePreview: null,
      experiences: [""],
      educations: [""],
      skills: [""],
      resumeHTML: "",
    };
  },
  methods: {
    previewProfilePicture(files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.profilePicturePreview = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
        this.profilePicture = file;
      }
    },
    addExperienceField() {
      this.experiences.push("");
    },
    addEducationField() {
      this.educations.push("");
    },
    addSkillsField() {
      this.skills.push("");
    },
    generateResume() {
      // Create resume HTML
      this.resumeHTML = `
        <div class="resume-header">
          <div class="profile-picture-preview">
            ${
              this.profilePicturePreview
                ? `<img src="${this.profilePicturePreview}" alt="Profile Picture">`
                : ""
            }
          </div>
          <div>
            <h2>${this.fullName}</h2>
            <p>${this.email} | ${this.phone}</p>
            <p>${this.address}</p>
          </div>
        </div>
        <div class="section">
          <h3>Professional Summary</h3>
          <p>${this.summary}</p>
        </div>
        <div class="section">
          <h3>Work Experience</h3>
          <ul>
            ${this.experiences
              .map((job) => (job.trim() ? `<li>${job.trim()}</li>` : ""))
              .join("")}
          </ul>
        </div>
        <div class="section">
          <h3>Education</h3>
          <ul>
            ${this.educations
              .map((edu) => (edu.trim() ? `<li>${edu.trim()}</li>` : ""))
              .join("")}
          </ul>
        </div>
        <div class="section">
          <h3>Skills</h3>
          <ul>
            ${this.skills
              .map((skill) => (skill.trim() ? `<li>${skill.trim()}</li>` : ""))
              .join("")}
          </ul>
        </div>
      `;
    },
  },
};
