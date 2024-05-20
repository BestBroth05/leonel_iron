/* eslint-disable react/prop-types */
export function ItemsCortes({item}) {
  return (
    <article className="items__card">

      <h3 className="items__price">{item.id}</h3>
      <span className="items__name">{item.cantidad}</span>
      <br />
      <div className='headerMedia'>
              <ul className="footer__social">
                <a
                  href={item.repo}
                  target="blank"
                  className="footer__social-link"
                >
                <FontAwesomeIcon icon={faGithubAlt} />
                </a>
              </ul>
              </div>
    </article>
  );
}
