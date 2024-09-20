# Project Title 
Habit Tracker App is a simple Task Management App build with react js.The goal of this project is add habits ,render habits and  display there status based on completed or not completed habits.



### **Features**

**HabitSlice Reducer**
-In Which There slice functionality used
-createAsyncThunk was used to fetch the data from the Api

**Redux Store Configuration:**
-Configured Redux store using configureStore function which
was used in reduxtoolkit and passed reducers in it.

**UseSelector And UseDipatch:**
-UseSelector hook was used to select data from store using state
-UseDipatch was to trigger a response regarding the action with 
the help of reducers functions.



### Project Structure
1. **AddHabitForm Component:**
-AddHabitForm Component there was a Form which was used to add habits.
2. **HabitList Component:**

-HabitList Component it was used to render all the Habits added
through the Form and styled using material UI Components and had
delete habits functionality.

3. **Habits Stats Component:**
-HabitStats Component was used to show the stats of the completed 
habits that were marked as completed.



### Technologies Used

-**ReactJS**: For building the user interface.
-**Tailwind CSS:**  For styling the app.
-**Git:** For version control and managing project updates.
-**GitHub**: To host the project's code and collaborate with others.
-**Typescript:**To manage the Types of the objects used
-**ReduxToolkit:** It was used for state management
-**MaterialUI:**It was used to build the form component through 
its build in Components.


### Installing


1 To set up and run the project locally:

1. Clone the repository:
```bash
https://www.github.com/osamaayub/HabitTrackerApp.git
```

2. Navigate to the project directory:
```bash
cd HabitTrackerApp
```


3.  Install dependencies:
```bash
npm install 
  ```

4.  Start the development server:
```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to use the app.


