# 🔐 Auth 0 App

Aplicación web desarrollada en **Angular 16** que implementa **autenticación con Auth0** utilizando el SDK oficial `@auth0/auth0-spa-js`.

El objetivo de este proyecto es reforzar conceptos clave de seguridad y arquitectura en Angular:

- Integración con **Auth0** para login/logout
- Protección de rutas con **Guards**
- Manejo de **observables** y `BehaviorSubject` para estado global
- Callback y redirección tras autenticación
- Uso de **RxJS** (`tap`, `concatMap`, `shareReplay`, `catchError`)

## 📸 Demo

🔗 **Visita la demo en línea:** [Auth 0 App en Netlify](https://starlit-valkyrie-da3355.netlify.app)

- **Pantalla de inicio**
  ![Home Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-0-App/refs/heads/main/media/Screenshot-1.png)

- **Navbar con login/logout dinámico**
  ![Protegida Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-0-App/refs/heads/main/media/Screenshot-2.png)

- **Vista protegida (solo con login)**
  ![Navbar Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-0-App/refs/heads/main/media/Screenshot-3.png)

## 🚀 Tecnologías Utilizadas

- **Angular 16**
- **RxJS 7**
- **TypeScript**
- **Auth0 SPA SDK (`@auth0/auth0-spa-js`)**
- **HTML5 / CSS3**

## 📁 Estructura del Proyecto

```
src/
├── app/
│ ├── app-routing.module.ts    # Configuración de rutas
│ ├── app.component.*          # Componente raíz
│ ├── app.module.ts            # Módulo principal
│ ├── components/
│ │ ├── callback/      # Procesa la redirección de Auth0
│ │ ├── home/          # Página de inicio
│ │ ├── navbar/        # Barra de navegación con login/logout
│ │ ├── precios/       # Página pública (ejemplo)
│ │ └── protegida/     # Página protegida (requiere login)
│ ├── services/
│ │ ├── auth.service.ts   # Lógica de integración con Auth0
│ │ └── auth.guard.ts     # Guard para proteger rutas
├── assets/
│ └── .gitkeep
├── favicon.ico
├── index.html
├── main.ts
├── styles.css
```

## 🔑 Funcionalidades

✅ Autenticación con Auth0 (login/logout)  
✅ Callback automático tras login  
✅ Protección de rutas con `CanActivate`  
✅ Almacenamiento de perfil de usuario en un `BehaviorSubject`  
✅ Navbar dinámico según estado de login  
✅ Páginas públicas y protegidas

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/Auth-0-App.git
```

```bash
cd Auth-0-App
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`

Basado en el curso de **Fernando Herrera** – [Angular: De Cero a Experto (Edición 2018)](https://www.udemy.com/course/angular-2-fernando-herrera/)
