import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //

  const topicClass = document.createElement(`div`);
  topicClass.classList.add(`topics`);

  topics.forEach(topic => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    topicClass.appendChild(tab);
  })

  // const tab1 = document.createElement(`div`);
  // tab1.classList.add('tab');
  // tab1.textContent = topics[0];
  // topicClass.appendChild(tab1);

  // const tab2 = document.createElement(`div`);
  // tab2.classList.add('tab');
  // tab2.textContent = topics[1];
  // topicClass.appendChild(tab2);


  // const tab3 = document.createElement(`div`);
  // tab3.classList.add('tab');
  // tab3.textContent = topics[2];
  // topicClass.appendChild(tab3);

  return topicClass;


  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5001/api/topics/`)
    .then(res => {
      // console.log(res.data);
      // use Tabs(topics) to create tabs
      const tabs = Tabs(res.data.topics);
      console.log(tabs)
      // use document.querySelectorAll(selector) to get `the element in the DOM that matches the selector passed to the function`
      document.querySelector(selector).append(tabs)
    })
    .catch(err => console.error(err))
}

export { Tabs, tabsAppender }
