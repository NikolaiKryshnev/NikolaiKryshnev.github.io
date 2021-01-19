let familySupr = $('.select-supr--js'),
	familyChild = $('.selectChild--js'),
	sectionSupr = $('.family-supr--js'),
	sectionChild = $('.child--js'),
	btnChild = $('.btnAdd--js');

function sectionChildBox(num) {
	let tableChild = (`
			<div class="table table--child" data-child="1">
				<span class="table-close table-close--js"  data-button="${num}">
					<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 2L33 33M33 2L2 33" stroke="#F7F7F7" stroke-width="4"/>
					</svg>
				</span>
				<div class="table-title">
					Данные ребенка
				</div>
				<div class="table-column">
					<div class="table-row">
						<div class="form-input ">
							First name (латинскими буквами)
							<input name="child-first-${num}" type="text">
						</div>
						<div class="form-input ">
							Last name (латинскими буквами)
							<input name="child-last-${num}" type="text">
						</div>
						<div class="form-input ">
							Страна рождения
							<input name="child-country-${num}" type="text">
						</div>
						<div class="form-input ">
							Место рождения
							<input name="child-place-${num}" type="text">
						</div>
						<div class="form-input ">
							Дата рождения
							<input name="child-dateBirth-${num}" type="date" name="" id="">
						</div>
						
					</div>
					<!-- /.table-row -->
					<div class="form-column__img ">
						<img src="./img/page-form/01.jpg" alt="">
					</div>
					<div class="table-column__buttons">
						<label class="button--phone" for="input-fileChild-${num}">
							<span class="btn btn--max ">Добавить фото</span>
							<input class="input-file--js" type="file" id="input-fileChild-${num}" name="input-fileChild-${num}">
						</label>
						<a class="btn btn--border" href="#">Требования к фото</a>
					</div>
				</div>
				<!-- /.table-column -->
			</div>
		`);
	return tableChild
};

// Close block family
function claseTable() {
	$('.table-close--js').unbind('click');
	$('.table-close--js').on('click', function (e) {
		let numSectionChild = sectionChild.attr('data-sectinochild');
		if (numSectionChild == 1 && $(this).parent().hasClass("table--child")) {
			$(this).parent().remove();
			btnChild.css({ 'display': 'none' });
			sectionChild.attr('data-sectinochild', 0);
			familyChild.prop('selectedIndex', 0)
		} else {
			console.log($(this).parent());

			if ($(this).parent().hasClass("table--child")) {
				sectionChild.attr('data-sectinochild', parseInt(numSectionChild) - 1);
			} else if ($(this).parent().hasClass("tabel--family")) {
				familySupr.prop('selectedIndex', 0)
			}
			$(this).parent().remove();

		}
	});
}

// input file preview
function previewFile() {
	$('.input-file--js').each(function () {
		$(this).change(function () {
			const type = this.files.item(0).type.replace(/\/.+/, '');
			if (type === 'image') {
				let reader = new FileReader();
				let thisBLock = $(this)
				reader.onload = function (e) {
					thisBLock.parent().find('img').remove();
					thisBLock.parent().append(
						$('<img src=\"' + e.target.result + '\" style="width: 100px;margin-top: 15px;"/>')
					);
				}
				reader.readAsDataURL(this.files.item(0));
			}
			$(this).parent().find('span').text('Файл: ' + this.files.item(0).name);
		});
	});

};
previewFile();


// Block show family
function selectShowBlock(select, blockhtml, check, html) {
	select.change(function () {
		let parentClass = $(this).attr("class");
		if ($(this).val() === check) {
			blockhtml.append(html);
			if ($(".table--child").length > 0 && parentClass == 'selectChild--js') {
				btnChild.css({ 'display': 'block' });
				sectionChild.attr('data-sectinochild', 1);
			}
			claseTable();
			previewFile();
		} else {
			if ($(".table--child").length >= 1 && parentClass == 'selectChild--js') {
				btnChild.css({ 'display': 'none' });
				sectionChild.attr('data-sectinochild', 0);
			}
			blockhtml.html('');

		}
	});
}

selectShowBlock(familySupr, sectionSupr, 'Женат / Замужем',
	`
		<div class="table tabel--family">
			<span class="table-close table-close--js">
				<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 2L33 33M33 2L2 33" stroke="#F7F7F7" stroke-width="4"/>
				</svg>
			</span>
			<div class="table-title">
				Данные жены/мужа
			</div>
			<div class="table-column">
				<div class="table-row">

					<div class="form-input ">
						First name (латинскими буквами)
						<input type="text">
					</div>
					<div class="form-input ">
						Last name (латинскими буквами)
						<input type="text">
					</div>
					<div class="form-input ">
						Страна рождения
						<input type="text">
					</div>
					<div class="form-input ">
						Место рождения
						<input type="text">
					</div>
					<div class="form-input ">
						Дата рождения
						<input type="date" name="" id="">
					</div>
					<div class="form-input ">
						Полное оконченное образование
						<select name="obrazovan_partner" id="obrazovan_partner">
							<option disabled="disabled" selected="selected" value="Не заполнено">Образование на данный момент</option>
							<option value="Высшее">Высшее</option>
							<option value="Среднее">Среднее</option>
							<option value="Средне-специальное после 8/9 кл.">Средне-специальное после 8/9 кл.</option>
							<option value="Средне-специальное после 10/11 кл.">Средне-специальное после 10/11 кл.</option>
						</select>
					</div>
					<div class="form-input ">
						Серия и номер паспорта
						<input type="text">
					</div>

					<div class="form-input ">
						Страна выдачи паспорта
						<select name="ms_pasport_strana_en_partners_section" id="ms_pasport_strana_en_partners_section">
								<option value="Belarus">Belarus</option>
								<option value="Russia">Russia</option>
								<option value="Ukraine">Ukraine</option>
								<option value="Uzbekistan">Uzbekistan</option>
								<option value="Turkmenistan">Turkmenistan</option>
								<option value="Tajikistan">Tajikistan</option>
								<option value="Poland">Poland</option>
								<option value="Moldova">Moldova</option>
								<option value="Estonia">Estonia</option>
								<option value="Egypt">Egypt</option>
								<option value="Israel">Israel</option>
								<option value="Armenia">Armenia</option>
								<option value="Azerbaijan">Azerbaijan</option>
								<option value="Kazakhstan">Kazakhstan</option>
								<option value="Kyrgyzstan">Kyrgyzstan</option>
								<option value="Belgium">Belgium</option>
								<option value="Czech Republic">Czech Republic</option>
								<option value="Denmark">Denmark</option>
								<option value="Finland">Finland</option>
								<option value="France">France</option>
								<option value="Georgia">Georgia</option>
								<option value="Germany">Germany</option>
								<option value="Greece">Greece</option>
								<option value="Hungary">Hungary</option>
								<option value="Italy">Italy</option>
								<option value="Latvia">Latvia</option>
								<option value="Lithuania">Lithuania</option>
								<option value="Luxembourg">Luxembourg</option>
								<option value="Norway">Norway</option>
								<option value="Portugal">Portugal</option>
								<option value="Romania">Romania</option>
								<option value="Slovakia">Slovakia</option>
								<option value="Slovenia">Slovenia</option>
								<option value="Spain">Spain</option>
								<option value="Sweden">Sweden</option>
								<option value="Switzerland">Switzerland</option>
								<option value="Turkey">Turkey</option>
								<option value="United Kingdom">United Kingdom</option>
							</select>
					</div>

					<div class="form-input ">
						Паспорт действителен до
						<input type="date" name="" id="">
					</div>
				</div>
				<!-- /.table-row -->
				<div class="form-column__img ">
					<img src="./img/page-form/01.jpg" alt="">
				</div>
				<div class="table-column__buttons">
					<label class="button--phone" for="input-fileSupr-2">
						<span class="btn btn--max ">Добавить фото</span>
						<input class="input-file--js" id="input-fileSupr-2" name="nput-fileSupr-2" type="file">
					</label>
					<a class="btn btn--border" href="#">Требования к фото</a>
				</div>
			</div>
			<!-- /.table-column -->
		</div>
	`
);

selectShowBlock(familyChild, sectionChild, 'ДА', sectionChildBox(1));

// add child data
function addChild() {
	let numSectionChild = sectionChild.attr('data-sectinochild'),
		lastChild = $('.table--child');
	sectionChild.attr('data-sectinochild', parseInt(numSectionChild) + 1);
	previewFile()
	if (lastChild.length == 0) {
		sectionChild.append(sectionChildBox(1))
	} else {
		let lastDataChild = $('.table--child').last().attr('data-child');
		sectionChild.append(sectionChildBox(parseInt(
			sectionChild.find($('.table--child').last()).attr('data-child')) + 1))
		sectionChild.find($('.table--child').last()).attr('data-child', parseInt(lastDataChild) + 1);
	}
}

btnChild.click(function () {
	addChild();
	claseTable();
	previewFile();
})




