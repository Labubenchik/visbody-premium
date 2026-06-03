# Visbody Premium

Astro-проект сайта Visbody: страницы, продуктовые разделы, каталог, формы, навигация и UI-компоненты.

## Как развернуть проект и разрабатывать в нем

### Требования

- Node.js `22.12.0` или новее.
- npm, который устанавливается вместе с Node.js.

### Установка зависимостей

Из корня проекта выполните:

```sh
npm install
```

### Запуск разработки

```sh
npm run dev
```

По умолчанию Astro поднимает локальный сервер на:

```text
http://localhost:4321/
```

Если порт занят, Astro предложит другой порт.

### Сборка проекта

```sh
npm run build
```

Готовая статическая сборка появится в папке `dist/`.

### Локальный просмотр production-сборки

Сначала соберите проект:

```sh
npm run build
```

Затем запустите preview:

```sh
npm run preview
```

### Деплой

В проекте есть `vercel.json`:

```json
{
	"framework": "astro",
	"buildCommand": "npm run build",
	"outputDirectory": "dist"
}
```

Для Vercel достаточно подключить репозиторий. Vercel выполнит `npm run build` и возьмет результат из `dist`.

На GitHub настроен автодеплой: при изменении основной ветки `main` платформа деплоя автоматически запускает сборку и публикует новую версию сайта. Поэтому перед отправкой изменений в `main` нужно локально проверить сборку:

```sh
npm run build
```

## Как установить нужную версию Node.js

Для проекта нужна Node.js `22.12.0` или новее. Рекомендуемый вариант для разработки - `nvm`, потому что он позволяет переключать версии Node.js между проектами.

### Установка через nvm

Если `nvm` уже установлен, выполните:

```sh
nvm install 22.12.0
nvm use 22.12.0
node -v
```

Команда `node -v` должна показать версию `22.x.x`.

Если `nvm` не установлен, установите его по инструкции из официального репозитория:

```text
https://github.com/nvm-sh/nvm
```

После установки перезапустите терминал и выполните:

```sh
nvm install 22.12.0
nvm use 22.12.0
```

### Установка Node.js без nvm

Node.js можно скачать напрямую:

```text
https://nodejs.org/
```

Выберите актуальную LTS-версию `22.x` или новее, установите ее и проверьте:

```sh
node -v
npm -v
```

После этого можно устанавливать зависимости проекта:

```sh
npm install
```

## Структура проекта

```text
.
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── logo/
│   ├── components/
│   │   └── lead-form/
│   ├── layouts/
│   ├── modules/
│   ├── pages/
│   ├── static-data/
│   ├── styles/
│   └── ui/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── vercel.json
```

### Основные директории

`src/pages/` - страницы сайта. Astro автоматически создает маршруты из файлов в этой папке.

Примеры:

- `src/pages/index.astro` -> `/`
- `src/pages/catalog.astro` -> `/catalog`
- `src/pages/catalog/visbody-m60.astro` -> `/catalog/visbody-m60`
- `src/pages/solutions/fitness.astro` -> `/solutions/fitness`

`src/layouts/` - общие layout-компоненты. Основной layout находится в `src/layouts/Layout.astro`; он подключает глобальные стили, шрифты, navbar, footer и слот страницы.

`src/modules/` - крупные секции и page-specific компоненты. Например:

- `src/modules/navbar/Navbar.astro`
- `src/modules/footer/Footer.astro`
- `src/modules/catalog/`
- `src/modules/product/`
- `src/modules/split-section/`

`src/ui/` - переиспользуемые UI-компоненты, например кнопки и поля ввода.

`src/components/` - более прикладные компоненты, например формы.

`src/static-data/` - общие данные проекта: маршруты, контакты и другие константы. Сейчас основной файл - `src/static-data/index.ts`.

`src/styles/global.css` - глобальные стили, CSS-переменные, базовые цвета, фон, шрифты и shared utilities.

`src/assets/` - исходные ассеты: логотипы, шрифты, изображения.

`public/` - публичные статические файлы, которые копируются в корень сайта без обработки сборщиком.

## Как редактировать страницы и добавлять новые страницы

### Как устроена страница

Типичная Astro-страница находится в `src/pages` и импортирует layout и нужные модули:

```astro
---
import Layout from "@/layouts/Layout.astro";
import SomeSection from "@modules/some-section/SomeSection.astro";
---

<Layout>
	<SomeSection />
</Layout>
```

Все, что находится внутри `<Layout>`, попадает в `<slot />` основного layout. Navbar и footer подключаются в `src/layouts/Layout.astro`, поэтому отдельно добавлять их на каждую страницу не нужно.

### Как редактировать существующую страницу

1. Найдите файл страницы в `src/pages/`.
2. Посмотрите, какие модули она импортирует.
3. Если нужно изменить порядок секций, меняйте разметку страницы.
4. Если нужно изменить конкретный блок, редактируйте соответствующий компонент в `src/modules/`.
5. Если меняются общие данные меню, контактов или маршрутов, редактируйте `src/static-data/index.ts`.

Пример: страница каталога находится в `src/pages/catalog.astro`, а ее секции - в `src/modules/catalog/`.

### Как добавить новую страницу

Создайте новый `.astro` файл в `src/pages`.

Например, файл:

```text
src/pages/about.astro
```

создаст маршрут:

```text
/about
```

Минимальный пример:

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout>
	<main class="page">
		<h1>О компании</h1>
		<p>Описание страницы.</p>
	</main>
</Layout>

<style>
	.page {
		width: min(100% - 32px, 1200px);
		margin: 0 auto;
		padding: 120px 0 80px;
	}
</style>
```

После создания страницы добавьте маршрут в `ROUTES`, если на страницу нужно ссылаться из меню, footer, карточек, кнопок или других компонентов.

`ROUTES` находится в:

```text
src/static-data/index.ts
```

Эта константа нужна, чтобы все ссылки проекта хранились в одном месте. Так меньше риска, что адрес страницы поменяется в одном компоненте, но останется старым в другом.

Пример нового маршрута:

```ts
export const ROUTES = {
	...
	about: {
		label: "О компании",
		href: "/about",
	},
	...
} as const;
```

Если добавляете маршрут в существующий `ROUTES`, не удаляйте остальные поля. Добавьте новый ключ рядом с текущими маршрутами.

Ссылки в компонентах лучше создавать через `ROUTES`, а не вручную:

```astro
---
import { ROUTES } from "@/static-data";
---

<a href={ROUTES.about.href}>{ROUTES.about.label}</a>
```

Для вложенных страниц принцип такой же:

```ts
export const ROUTES = {
	...
	services: {
		label: "Услуги",
		href: "/services",
		children: {
			audit: {
				label: "Аудит",
				href: "/services/audit",
			},
		},
	},
	...
} as const;
```

Использование:

```astro
---
import { ROUTES } from "@/static-data";
---

<a href={ROUTES.services.children.audit.href}>
	{ROUTES.services.children.audit.label}
</a>
```

### Как добавить вложенную страницу

Для вложенного маршрута создайте вложенную папку.

Например:

```text
src/pages/services/audit.astro
```

создаст маршрут:

```text
/services/audit
```

### Как добавить страницу товара

Текущие страницы товаров лежат здесь:

```text
src/pages/catalog/
```

Чтобы добавить новый товар:

1. Создайте файл страницы, например `src/pages/catalog/new-product.astro`.
2. Используйте существующие продуктовые страницы как шаблон:
    - `src/pages/catalog/visbody-m60.astro`
    - `src/pages/catalog/visbody-m30.astro`
    - `src/pages/catalog/visbody-s30.astro`
    - `src/pages/catalog/creator-a600.astro`
3. Добавьте данные нового товара в `ROUTES.catalog.сhildren` в `src/static-data/index.ts`.
4. Если товар должен появиться в каталоге, обновите модуль `src/modules/catalog/CatalogProducts.astro`.
5. Если товар должен появиться в footer, проверьте список `PRODUCT_LINKS` в `src/modules/footer/Footer.astro`.

### Как добавить страницу в меню

Главное меню берется из `src/modules/navbar/Navbar.astro`, а данные маршрутов находятся в `src/static-data/index.ts`.

Чтобы добавить новый пункт:

1. Добавьте маршрут в `ROUTES` в `src/static-data/index.ts`.
2. Добавьте этот маршрут в массив ссылок в `Navbar.astro`, используя объект из `ROUTES`, а не строку с адресом.
3. Если пункт должен дублироваться в footer, добавьте его в `FOOTER_NAV_LINKS` в `src/modules/footer/Footer.astro`.

Пример:

```astro
---
import { ROUTES } from "@/static-data";

const NAV_LINKS = [ROUTES.catalog, ROUTES.technology, ROUTES.about] as const;
---
```

### Как редактировать стили

Для новых стилей используйте обычный CSS:

- Astro-компоненты: scoped `<style>` внутри `.astro` файла.
- React-компоненты: CSS Modules, например `Component.module.css`.
- Общие токены и глобальные стили: `src/styles/global.css`.

Новые стили не пишутся на TailwindCSS. Уже существующий Tailwind-код можно оставлять, если задача не требует переписывания.

Полезные CSS-переменные проекта находятся в `src/styles/global.css`:

```css
--color-brand-dark
--color-brand-deep
--color-brand-accent
--color-brand-light
--color-brand-gray
--font-sans
```

### Как работать с React-компонентами

В проекте подключен React через `@astrojs/react`. React-компоненты можно импортировать в Astro-страницы и модули.

Если компонент интерактивный, добавляйте client directive:

```astro
---
import RoiCalculator from "@modules/roi-calculator/RoiCalculator";
---

<RoiCalculator client:load />
```

Частые директивы:

- `client:load` - загрузить сразу на клиенте.
- `client:idle` - загрузить, когда браузер свободен.
- `client:visible` - загрузить, когда компонент попал в viewport.

### Как проверить изменения

После правок запустите:

```sh
npm run build
```

Если сборка прошла успешно, Astro сгенерирует все страницы в `dist/`.
