<template>
  <q-page class="container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1>Resume Generator</h1>
          <q-form @submit="generateResume" id="resumeForm" class="q-gutter-md">
            <q-input
              filled
              v-model="fullName"
              label="Full Name"
              placeholder="John Doe"
              required
            ></q-input>
            <q-input
              filled
              v-model="email"
              type="email"
              label="Email"
              placeholder="john.doe@example.com"
              required
            ></q-input>
            <q-input
              filled
              v-model="phone"
              type="tel"
              label="Phone"
              placeholder="(123) 456-7890"
              required
            ></q-input>
            <q-input
              filled
              v-model="address"
              label="Address"
              placeholder="1234 Elm St, Springfield, IL"
            ></q-input>
            <q-input
              filled
              v-model="summary"
              type="textarea"
              label="Professional Summary"
              rows="4"
              placeholder="A brief summary about your professional background and goals."
            ></q-input>
            <q-uploader
              filled
              label="Profile Picture"
              accept="image/*"
              @added="previewProfilePicture"
            ></q-uploader>
            <div v-if="profilePicturePreview" class="profile-picture-preview">
              <img :src="profilePicturePreview" alt="Profile Picture" />
            </div>
            <div>
              <label>Work Experience</label>
              <div id="experience-container" class="q-gutter-sm">
                <q-input
                  v-for="(experience, index) in experiences"
                  :key="index"
                  v-model="experiences[index]"
                  label="Experience"
                  placeholder="Job Title, Company, Dates"
                ></q-input>
              </div>
              <q-btn
                label="Add Work Experience"
                color="primary"
                @click="addExperienceField"
              ></q-btn>
            </div>
            <div>
              <label>Education</label>
              <div id="education-container" class="q-gutter-sm">
                <q-input
                  v-for="(education, index) in educations"
                  :key="index"
                  v-model="educations[index]"
                  label="Education"
                  placeholder="Degree, Institution, Dates"
                ></q-input>
              </div>
              <q-btn
                label="Add Education"
                color="primary"
                @click="addEducationField"
              ></q-btn>
            </div>
            <div>
              <label>Skills</label>
              <div id="skills-container" class="q-gutter-sm">
                <q-input
                  v-for="(skill, index) in skills"
                  :key="index"
                  v-model="skills[index]"
                  label="Skill"
                  placeholder="Skill"
                ></q-input>
              </div>
              <q-btn
                label="Add Skill"
                color="primary"
                @click="addSkillsField"
              ></q-btn>
            </div>
            <q-btn
              type="submit"
              label="Generate Resume"
              color="secondary"
            ></q-btn>
          </q-form>
          <div id="resume" class="resume" v-html="resumeHTML"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../script.js"></script>

<style lang="scss" src="../assets/style.scss"></style>
