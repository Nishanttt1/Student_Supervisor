import { useRef, useState } from "react";
import notification from "../assets/notification.png";
import { FiBookOpen, FiFileText, FiUpload, FiX } from "react-icons/fi";
import "./Resource.css";

const Resource = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [resourceFile, setResourceFile] = useState(null);
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  const [resources, setResources] = useState([
    {
      title: "Project Guidelines.pdf",
      description: "University guidelines",
      type: "PDF",
      tone: "coral",
    },
    {
      title: "SRS Template.docx",
      description: "Documentation template",
      type: "DOCX",
      tone: "indigo",
    },
    {
      title: "Evaluation Rubric.pdf",
      description: "Supervisor evaluation criteria",
      type: "PDF",
      tone: "gold",
    },
    {
      title: "IEEE Research Papers",
      description: "Recommended references",
      type: "Collection",
      tone: "mint",
    },
  ]);

  const openUploadModal = () => {
    setUploadError("");
    setShowUploadModal(true);
  };

  const closeUploadModal = () => {
    setShowUploadModal(false);
    setResourceFile(null);
    setResourceTitle("");
    setResourceDescription("");
    setUploadError("");
  };

  const handleFileChange = (event) => {
    const [file] = event.target.files;
    if (!file) return;

    setResourceFile(file);
    if (!resourceTitle) setResourceTitle(file.name);
    setUploadError("");
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (!resourceFile) {
      setUploadError("Choose a file before uploading.");
      return;
    }

    const extension = resourceFile.name.includes(".")
      ? resourceFile.name.split(".").pop().toUpperCase()
      : "FILE";

    setResources((currentResources) => [
      ...currentResources,
      {
        title: resourceTitle.trim() || resourceFile.name,
        description: resourceDescription.trim() || "Uploaded resource",
        type: extension,
        tone: "indigo",
      },
    ]);
    closeUploadModal();
  };

  return (
    <div className="resource">
      <header className="header">
        <div className="title-left">
          <span>PROJECT LIBRARY</span>
          <h2>Resources</h2>
        </div>

        <div className="title-right">
          <button
            className="add-project"
            type="button"
            onClick={openUploadModal}
          >
            <FiUpload aria-hidden="true" /> Upload Resource
          </button>
          <button
            className="notification-logo"
            type="button"
            aria-label="Open notifications"
          >
            <img src={notification} alt="" />
          </button>

          <button
            className="profile-logo"
            type="button"
            aria-label="Open profile"
          >
            RR
          </button>
        </div>
      </header>

      <main className="resource-content">
        <div className="resource-grid">
          {resources.map((resource) => (
            <article
              className="resource-card"
              key={`${resource.title}-${resource.type}`}
            >
              <div className={`resource-icon ${resource.tone}`}>
                {resource.type === "Collection" ? (
                  <FiBookOpen />
                ) : (
                  <FiFileText />
                )}
              </div>
              <div className="resource-details">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className={`resource-type ${resource.tone}`}>
                  {resource.type}
                </span>
              </div>
              <button className="resource-open" type="button">
                Open
              </button>
            </article>
          ))}
        </div>
      </main>

      {showUploadModal && (
        <div
          className="resource-modal-overlay"
          role="presentation"
          onMouseDown={closeUploadModal}
        >
          <section
            className="resource-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="upload-resource-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="resource-modal-close"
              type="button"
              aria-label="Close upload dialog"
              onClick={closeUploadModal}
            >
              <FiX />
            </button>
            <p className="modal-eyebrow">PROJECT LIBRARY</p>
            <h2 id="upload-resource-title">Upload a resource</h2>
            <p className="modal-copy">
              Add a document or reference for your project team.
            </p>

            <form onSubmit={handleUpload}>
              <button
                className="file-dropzone"
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                <FiUpload />
                <strong>
                  {resourceFile ? resourceFile.name : "Choose a file"}
                </strong>
                <span>PDF, DOCX, PPTX or other project files</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                hidden
                onChange={handleFileChange}
              />

              <label>
                Title
                <input
                  value={resourceTitle}
                  onChange={(event) => setResourceTitle(event.target.value)}
                  placeholder="e.g. Research checklist"
                />
              </label>
              <label>
                Description
                <input
                  value={resourceDescription}
                  onChange={(event) =>
                    setResourceDescription(event.target.value)
                  }
                  placeholder="What is this resource for?"
                />
              </label>
              {uploadError && <p className="upload-error">{uploadError}</p>}
              <div className="resource-modal-actions">
                <button
                  className="modal-cancel"
                  type="button"
                  onClick={closeUploadModal}
                >
                  Cancel
                </button>
                <button className="modal-upload" type="submit">
                  Upload resource
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default Resource;
