import React from 'react';

const CommentsPlugin = ({filmUrl}) => {
  return (
    <section className='commentsPlugin'>
            <div className="container_1">
        <iframe
        src={`https://www.facebook.com/plugins/comments.php?href=${(filmUrl)}`}
        width="100%"
        height="900px"
        num_posts='5'
        allowTransparency="true"
        allow="encrypted-media"
        title="Facebook Comments Plugin"
      >
      </iframe>
      </div>
    </section>)
};

export default CommentsPlugin
