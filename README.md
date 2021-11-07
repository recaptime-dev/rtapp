# Feditrix Homeserver / Codebase for `recaptime.app`

[![Open in Gitpod Shields.io Badge](https://img.shields.io/badge/open%20in-Gitpod-orange?style=for-the-badge&logo=gitpod)](https://gitpod.io/#https://gitlab.com/RecapTime/app)
![Repo size for GitHub mirror](https://img.shields.io/github/repo-size/RecapTime/rtapp?style=for-the-badge)
![LoC](https://img.shields.io/tokei/lines/gitlab/RecapTime/app?style=for-the-badge&logo=gitlab)

This repository is the official home for the Feditrix Homeserver, which uses the same codebase as for the future `recaptime.app`.
You know it, it's a super-app for the fediverse with the features of Matrix built-in. Just a side note, this monorepo is in its early stages,
so don't expect stability and comformance to the specs yet.

## Project Structure

* `api`- The brain and the backend code, where authentication, user profiles and other logic resides.
* `app` - The Next.js codebase that glues between the web UI and the API.
* `landing` - Coming soon page, probably.
* `docker` - Resources and source files for the Docker image

## Resources for contributors and developers

* Code of Conduct
* Contributing Guidelines
* [Security Policy](SECURITY.md)
* Docs soon!

### Other Projects

We also maintain other OSS projects that would compliment with this project, including:

* [Verification Process Endpoint API](https://gitlab.com/RecapTime/verify), an under development API for asserting username ownership to specific entity, the open source way.

## License

AGPLv3 or later.
