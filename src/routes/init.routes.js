// import initCalendarRoutes from './calendar.routes.js';
// import initCateforyRoutes from './category.routes.js';
// import initAccountRoutes from './account.routes.js';
// import initMylistRoutes from './mylist.routes.js':
// import initPlateformRoutes from './plateform.routes.js';
// import initUser from './user.routes.js';
import initUserRoutes from './user.routes.js';

const initRoutes = (app) => {
    
//   initCalendarRoutes(app);
//   initCategoryRoutes(app);
//   initMyaccountRoutes(app);
//   initUsersRoutes(app);
//   initMylistRoutes(app);
//   initPlateformRoutes(app);
    initUserRoutes(app);
};

export default initRoutes;