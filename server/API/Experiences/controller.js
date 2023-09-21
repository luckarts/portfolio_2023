import {
  get_AllExperiences,
  get_ExperiencesByName,
  createExperiencesDetails,
  createListExperiences,
  createExperiences,
  updateExperiencesDetails,
  updateExperiences,
  updateListExperiences
} from '../../Services/Experiences/experiences_Db';

export async function getListExperiences(req, res) {
  const listExperiences = await get_AllExperiences();
  if (listExperiences) {
    return res.status(200).json({ listExperiences });
  } else return null;
}
export async function getExperiencesByName(req, res) {
  const company = req.params.company;
  const listExperiences = await get_ExperiencesByName(company);
  if (listExperiences) {
    return res.status(200).json({ listExperiences });
  } else return null;
}
export async function create_Experiences_Details(req, res) {
  const { date, fonction, company, link } = req.body;
  const new_ExperienceDetails = await createExperiencesDetails({
    date,
    fonction,
    company,
    link
  });

  return res.status(200).json({ new_ExperienceDetails });
}

export async function create_List_Experiences(req, res) {
  const { newExperiences, id } = req.body;
  for (let i = 0; i < newExperiences.length; i++) {
    const description = newExperiences[i].description;
    await createListExperiences(description, id);
  }

  return res.status(200).json({ message: 'you are post in db Experience' });
}
export async function create_Experiences(req, res) {
  const { year } = req.body;
  const newExperience = await createExperiences({ year });

  return res.status(200).json({ message: 'you are post in db Experience', newExperience });
}
export async function createAll_Experiences(req, res) {
  const { date, job, company, link, list_experience, year } = req.body;

  if (date || job || company || link || year) {
    await createExperiencesDetails(date, job, year, company, link);
  }

  if (list_experience) {
    for (let i = 0; i < list_experience.length; i++) {
      const description = list_experience[i].description;
      const id = list_experience[i].id;
      await createListExperiences(description, id);
    }
  }

  return res.status(200).json({ message: 'Experience has been created !' });
}
/* export async function createAll_Experiences(req, res) {
    const { year } = req.body
    if (req.body.card_left) {
        const { date, fonction, company, link, description, ExperiencesId } = req.body.card_left
        if (date || fonction || company || link) {
            await createExperiencesDetails({ date, fonction, company, link });
        }

        if (description && ExperiencesId) {
            await createListExperiences({ description, ExperiencesId });
        }
    }
    if (req.body.card_right) {
        const { date, fonction, company, link, description, ExperiencesId } = req.body.card_right
        if (date || fonction || company || link) {
            await createExperiencesDetails({ date, fonction, company, link });
        }
        if (description && ExperiencesId) {
            await createListExperiences({ description, ExperiencesId });
        }
    }
    if (year) {
        await createExperiences({ year });
    }

    return res.status(200).json({ "message": "Experience has been created !" });
} */

export async function update_Experience(req, res) {
  const id = req.params.id;

  const { date, job, company, link, year, list_experience } = req.body.experience;
  if (date || job || company || link || year) {
    await updateExperiencesDetails(date, year, job, company, link, id);
  }

  if (list_experience) {
    for (let i = 0; i < list_experience.length; i++) {
      const description = list_experience[i].description;
      const ids = list_experience[i].id;
      await updateListExperiences(description, ids);
    }
  }

  return res.status(200).json({ message: 'you are update in db Experience' });
}
