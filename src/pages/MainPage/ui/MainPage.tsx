import styles from './MainPage.module.scss';
import {Calc} from 'features';

const MainPage = () => {
	return (
		<div className={styles.pageWrapper}>
			<h1>Конструктор калькулятора</h1>
			<Calc />
		</div>
	);
};

export default MainPage;
