import './Titre.css';
import { Badge } from 'react-bootstrap';

export default function Titre(props) {
	const nb = props.nb;
	const nbMax = props.nbMax;

	return (
		<h3>
			{props.text}{' '}
			<Badge className="Title-badge" bg="secondary">
				{nb}/{nbMax}
			</Badge>
		</h3>
	);
}
