---
title: "React Hook"
date: 2021-04-11
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 

## 使用

```jsx
import { PersistGate } from "redux_persist/integration/react";
<PersistGate persistor={persistor} loading={null}>
{/*被包裹的子组件*/}
</PersistGate>
```

```jsx
import { persistStore, persistReducer } from "redux_persist";
import storage from "../redux_persist3.0/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

const persistor = persistStore(store);
export { store, persistor };
```

## 实现

<RecoDemo :collapse="true">
  <template slot="code- PersistGate.js">
​    <<< @/docs/frontend/react/code/redux-persist/integration/react/PersistGate.js
  </template>
  <template slot="code- storage.js">
​    <<< @/docs/frontend/react/code/redux-persist/lib/storage/index.js
  </template>
  <template slot="code- context.js">
​    <<< @/docs/frontend/react/code/redux-persist/persistReducer.js
  </template>
  <template slot="code- Redirect.js">
​    <<< @/docs/frontend/react/code/redux-persist/persistStore.js
  </template> 
</RecoDemo>