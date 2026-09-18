import PropTypes from "prop-types";

function PagePlaceholder({ pageName }) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>{pageName}</h1>
      <p>This page is under construction. Navigate using the app menu.</p>
    </main>
  );
}

PagePlaceholder.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PagePlaceholder;
