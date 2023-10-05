const Journal = require("../models/journal");

const getErrorObj = (error) => ({
  message: `An error occured -> ${error}`,
});

//show the list of journals
const index = (req, res, next) => {
  Journal.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json(getErrorObj(error));
    });
};

//show single journal
const show = (req, res, next) => {
  let journalId = req.body.id;
  Journal.findById(journalId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json(getErrorObj(error));
    });
};

//add a new journal
const store = (req, res, next) => {
  const { name, description, imagePath } = req?.body || {};
  const newJournal = new Journal({
    name,
    description,
    imagePath,
  });

  newJournal
    .save()
    .then((response) => {
      res.json({
        message: "Your Photo Journal has been created successfully :)",
      });
    })
    .catch((error) => {
      res.json(getErrorObj(error));
    });
};

//update a journal
const update = (req, res, next) => {
  const { id, name, description, imagePath } = req?.body || {};

  const updatedData = {
    name,
    description,
    imagePath,
  };

  Journal.findByIdAndUpdate(id, { $set: updatedData })
    .then((response) => {
      res.json({
        message: "Your photo journal updated successfully :)",
      });
    })
    .catch((error) => {
      res.json(getErrorObj(error));
    });
};

//delete a journal
const destroy = (req, res, next) => {
  const journalId = req.body.id;
  Journal.findByIdAndRemove(journalId)
    .then((response) =>
      res.json({
        message: "Your photo journal deleted successfully :(",
      })
    )
    .catch((error) => {
      res.json(getErrorObj(error));
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
