import Link from 'next/link';
import Container from '../container';
import Button from '../button';
import formatDate from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default ({ detail, link, title, date, prefetch, children }) => {
  return (
    <div className="post-preview">
      <style jsx>{`
        .post-preview {
          padding: 2.5rem 0;
          transition: all 0.5s ease;
        }
        .post-preview:not(:last-of-type) {
          border-bottom: 1px solid #f3f3f3;
        }
        .post-preview:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }
        .post-title {
          display: inline-block;
          cursor: pointer;
        }
        .description {
          margin-bottom: 2rem;
        }
        .date {
          margin-top: 0.25rem;
          margin-bottom: 1rem;
        }
      `}</style>
      <Container small>
        <Link href={link} prefetch={prefetch}>
          <h3 className="f3 post-title">{title}</h3>
        </Link>
        <p className="f6 date mute">
          {formatDate(date, 'dddd, MMMM Do YYYY')} (
          {distanceInWordsToNow(date, {
            addSuffix: true
          })}
          )
        </p>
        {detail && <section className="description f5">{children}</section>}
        {detail && <Button href={link}>Read More</Button>}
      </Container>
    </div>
  );
};
