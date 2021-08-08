import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { upperFirst } from 'lodash';
import * as SectionComponents from './sections';

const smallWrapper = {
  padding: '1rem 0 0',
  maxWidth: 'var(--width-medium)',
  boxSizing: 'border-box',
  margin: '0 auto',
  display: 'flex',
};
const smallStyle = {
  width: '100%',
  padding: '0 1.5rem',
  maxWidth: 'var(--width-small)',
};

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[upperFirst(section._type)];

  if (Section) {
    return Section;
  }

  console.error('Cant find section', section); // eslint-disable-line no-console
  return null;
}

function renderAuthor(author) {
  return (
    <div style={smallWrapper}>
      <small style={smallStyle}>Geschreven door: {author}</small>
    </div>
  );
}
function RenderSections({ sections, blogs, author }) {
  if (!sections) {
    console.error('Missing section');
    return <div>Missing sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section, i) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>;
        }
        if (i === 0 && author) {
          if (section._type === 'Hero') {
            return (
              <>
                <SectionComponent {...section} key={section._key} blogs={blogs} />;
                {renderAuthor(author)}
              </>
            );
          }
          return (
            <>
              {renderAuthor(author)}
              <SectionComponent {...section} key={section._key} blogs={blogs} />;
            </>
          );
        }
        return <SectionComponent {...section} key={section._key} blogs={blogs} />;
      })}
    </Fragment>
  );
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object),
    })
  ),
  blogs: PropTypes.array,
  author: PropTypes.string,
};

export default RenderSections;
