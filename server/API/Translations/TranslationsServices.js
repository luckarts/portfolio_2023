import fs from 'fs ';
import path from 'path';

export async function getTranslationCommonLocales(languages) {
  for (const language of languages) {
    const filePath = path.join(__dirname, 'build', 'locales', language, 'common.json');

    // Vérifiez si le fichier common.json existe pour la langue
    if (!fs.existsSync(filePath)) {
      console.warn(`Fichier common.json pour la langue ${language} non trouvé.`);
      continue; // Passez à la langue suivante si le fichier n'existe pas
    }

    // Lisez tous les fichiers du dossier de la langue
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allTranslations[language] = fileContent;
  }

  return allTranslations;
}

export async function get_ExperiencesByName(company) {
  const experiences = db.Experience.findOne({
    attributes: ['date', 'job', 'year', 'company', 'link', 'id'],
    where: { company: company },
    include: [
      {
        model: db.List_experience,
        as: 'list_experience',
        attributes: ['description', 'id']
      }
    ]
  });

  if (experiences) {
    return experiences;
  }

  return null;
}

export async function createExperiencesDetails(date, job, year, company, link) {
  if (!date) {
    throw new Error('invalid argument date');
  }

  const experienceDetails = await db.Experience.create({
    date: date,
    job: job,
    year: year,
    company: company,
    link: link
  });

  return experienceDetails;
}
export async function updateExperiencesDetails(date, year, job, company, link, id) {
  const experienceDetail = await db.Experience.update(
    {
      date: date,
      job: job,
      year: year,
      company: company,
      link: link
    },
    { where: { id: id } }
  );
  if (experienceDetail) return experienceDetail;
  return null;
}
export async function createListExperiences(description, id) {
  if (!description) {
    throw new Error('invalid argument listExperiences');
  }
  if (!id) {
    throw new Error('invalid argument id');
  }
  const listExperience = await db.List_experience.create({
    description: description,
    experienceId: id
  });
  if (listExperience) return listExperience;
  return null;
}
export async function updateListExperiences(description, id) {
  const listExperience = await db.List_experience.update(
    {
      description: description
    },
    { where: { id: id } }
  );
  if (listExperience) return listExperience;
  return null;
}
export async function createExperiences(year) {
  const experience = await db.Experience.create({
    year: year
  });
  if (experience) return experience;
  return null;
}
