# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.4] - 03/04/2023

### Fixed

- Mobile media queries for in the `<_typography.scss`> file.

## [1.1.3] - 03/04/2023

### Removed

- Unusued getDate functions in `<main.js>` file.

### Fixed

- Footer year error in footer component (replaced external getDate function with inline).

## [1.1.2] - 03/04/2023

### Added

- New changes to project structure in README.md file diagram.

### Fixed

- Heading for v1.1.1 in this changelog file.
- Refactored footer year auto update function in `<main.js>` file.

## [1.1.1] - 03/04/2023

### Fixed

- Icon for android/chrome and apple in `<manifest.json>` error.

### Removed

- Unused onScroll function in `<main.js>` file.

## [1.1.0] - 03/04/2023

### Added

- Installed project dependencies.
- Created `<js>` folder inside the `<public>` subdirectory.
- Created components folder inside the `<src>` subdirectory.
  - Created and styled the Header component.
- Finished initial App/Home page.
- Recompiled build folder.

### Changes

- Replaced logo.svg file in `<src>` subdirectory.
- Replaced favicon in `<public>` subdirectory.
- Replaced android and apple icons `<public>` subdirectory.
- Changed app title in the `<index.html>` file.
- Removed default code in the `<App.js>` file.

### Removed

- `<App.css>` and `<index.css>` files.

## [1.0.2] - 03/02/2023

### Added

- Updated project structure diagram in README file.

## [1.0.1] - 03/02/2023

### Added

- Installed and configured `gh-pages` in the `<package.json>` file.
  - Will handle build and deployment to GitHub pages.
  - Generated `<build>` folder in root directory to house static assets.
- Added `gh-pages` homepage and scripts in the `<package.json>` file.

### Changes

- Moved `react-scripts` from dependencies to devDependencies in `<package.json>` file.

## [1.0.0] - 03/02/2023

### Added

- Ran `create-react-app` and installed react files.
  - Generated `<node_modules>` folder in root directory.
  - Generated `<public>` folder in root directory to house static assets.
  - Generated `<src>` folder in root directory to house all react files.
  - Generated `<package-lock.json>` and `<package.json>` files in root directory.
- Updated project structure diagram in README file.

## [0.0.1] - 03/02/2023

### Added

- This CHANGELOG file to track project source code evolution.
- Project details in the README file.

[Unreleased]: https://github.com/ogre2/ogre2.github.io/compare/v1.1.4....HEAD
[1.1.4]: https://github.com/ogre2/ogre2.github.io/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/ogre2/ogre2.github.io/compare/v1.1.1...v1.1.3
[1.1.2]: https://github.com/ogre2/ogre2.github.io/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/ogre2/ogre2.github.io/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/ogre2/ogre2.github.io/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/ogre2/ogre2.github.io/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/ogre2/ogre2.github.io/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ogre2/ogre2.github.io/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/ogre2/ogre2.github.io/releases/tag/v0.0.1
