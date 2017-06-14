import * as React from 'react';
import Playlist from './Playlist'

class App extends React.Component<void, void> {
	render() {
		return(
			<div className="content">
				<div className="content-inner">
					<div className="central-part-wrapper">
						<div className="central-part">
							<Playlist />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;




// super(props); везде в конструкторах
// переименовать интерфейсы с ISomeProps
// handle у названий функций в пропсах
// Рефакоринг actions.ts (упрощение)
// Стрелочные функции по приложению
// Редактирование айтема в модалке
// Реализация reducer  в switch'ах
// Валидация полей у правого меню



// Документирование кода (jsdoc)
// Async(promise) на init списка
// let, const, var








