### Requirements

⚠️ **Important:** This project requires:

- Node.js version 22 or higher
- pnpm as package manager

Please refer to the official [pnpm installation guide](https://pnpm.io/installation) for detailed setup instructions.

After installation, it's recommended to align your pnpm version with the project:

```bash
pnpm self-update
```

### Setup

Install dependencies for all apps:

```
pnpm install
```

#### iOS

In case automatic pods installation doesn't work when running iOS project, you can install manually:

```
pnpm pods
```

### Running the Super App

Start DevServer for Host and Mini apps:

```
pnpm start
```

Run Super App on iOS or Android (ios | android):

```
pnpm run:host:<platform>
```

### Demo

![](demo.gif)
