import { Link } from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader({ title, backLink }) {
  return (
    <header className="page-header">
      <Link to={backLink} className="page-header__back-button">
        ← Back
      </Link>

      <h1 className="page-header__title">{title}</h1>
    </header>
  );
}