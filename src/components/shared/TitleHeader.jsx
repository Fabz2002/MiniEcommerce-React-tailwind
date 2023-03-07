const date = new Date();
const day = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];
const month = [
	'Ene',
	'Feb',
	'Mar',
	'Abr',
	'May',
	'Jun',
	'Jul',
	'Ago',
	'Set',
	'Oct',
	'Nov',
	'Dic',
];

function TitleHeader({ title = 'Carta de Hoy' }) {
	return (
		<div>
			<h1 className='text-2xl text-gray-700'>{title}</h1>
			<p className='text-gray-100 text-sm'>{`${
				day[date.getDay()]
			}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`}</p>
		</div>
	);
}

export default TitleHeader;
