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



// Редактирование айтема в модалке
// handle у названий функций в пропсах
// super(props); везде в конструкторах
// Рефакоринг actions.ts (упрощение)
// Валидация полей у правого меню
// переименовать интерфейсы с ISomeProps
// Документирование кода (jsdoc)