# Host Application

This is the main app, which is a super app. It contains all the micro-frontends and provides a way to navigate between them

## Setup

Install dependencies for all apps in root directory of this monorepo:

```
pnpm install
```

Install pods:

```
pnpm pods
```

Pods might sometimes be outdated, and they might fail to install, in that case you can update them by running:

```
pnpm pods:update
```

### Run

Start dev server for all apps in root directory of this monorepo:

```
pnpm start
```

Or start dev server for Host app:

```
pnpm start:host
```

Run iOS or Android app (ios | android):

```
pnpm run:host:<platform>
```
