import NoSSR from 'react-no-ssr';
import React, { Component } from 'react';
import './chat.css'
export default class Chat extends React.Component {
    componentWillMount(){
        // (function(){
  
        //     var chat = {
        //       messageToSend: '',
        //       messageResponses: [
        //         'Why did the web developer leave the restaurant? Because of the table layout.',
        //         'How do you comfort a JavaScript bug? You console it.',
        //         'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
        //         'What is the most used language in programming? Profanity.',
        //         'What is the object-oriented way to become wealthy? Inheritance.',
        //         'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
        //       ],
        //       init: function() {
        //         this.cacheDOM();
        //         this.bindEvents();
        //         this.render();
        //       },
        //       cacheDOM: function() {
        //         this.$chatHistory = $('.chat-history');
        //         this.$button = $('button');
        //         this.$textarea = $('#message-to-send');
        //         this.$chatHistoryList =  this.$chatHistory.find('ul');
        //       },
        //       bindEvents: function() {
        //         this.$button.on('click', this.addMessage.bind(this));
        //         this.$textarea.on('keyup', this.addMessageEnter.bind(this));
        //       },
        //       render: function() {
        //         this.scrollToBottom();
        //         if (this.messageToSend.trim() !== '') {
        //           var template = Handlebars.compile( $("#message-template").html());
        //           var context = { 
        //             messageOutput: this.messageToSend,
        //             time: this.getCurrentTime()
        //           };
          
        //           this.$chatHistoryList.append(template(context));
        //           this.scrollToBottom();
        //           this.$textarea.val('');
                  
        //           // responses
        //           var templateResponse = Handlebars.compile( $("#message-response-template").html());
        //           var contextResponse = { 
        //             response: this.getRandomItem(this.messageResponses),
        //             time: this.getCurrentTime()
        //           };
                  
        //           setTimeout(function() {
        //             this.$chatHistoryList.append(templateResponse(contextResponse));
        //             this.scrollToBottom();
        //           }.bind(this), 1500);
                  
        //         }
                
        //       },
              
        //       addMessage: function() {
        //         this.messageToSend = this.$textarea.val()
        //         this.render();         
        //       },
        //       addMessageEnter: function(event) {
        //           // enter was pressed
        //           if (event.keyCode === 13) {
        //             this.addMessage();
        //           }
        //       },
        //       scrollToBottom: function() {
        //          this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
        //       },
        //       getCurrentTime: function() {
        //         return new Date().toLocaleTimeString().
        //                 replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        //       },
        //       getRandomItem: function(arr) {
        //         return arr[Math.floor(Math.random()*arr.length)];
        //       }
              
        //     };
            
        //     chat.init();
            
        //     var searchFilter = {
        //       options: { valueNames: ['name'] },
        //       init: function() {
        //         var userList = new List('people-list', this.options);
        //         var noItems = $('<li id="no-items-found">No items found</li>');
                
        //         userList.on('updated', function(list) {
        //           if (list.matchingItems.length === 0) {
        //             $(list.list).append(noItems);
        //           } else {
        //             noItems.detach();
        //           }
        //         });
        //       }
        //     };
            
        //     searchFilter.init();
            
        //   })();
        // https://codepen.io/drehimself/pen/KdXwxR
    }
    render() {
        return (
              <div id="home" className="hompage-slides-wrapper">
               <div className="single-slider-item slider-item-img-bg" >
                            <div className="slide-item-table">
                                <div className="slide-item-tablecell">
                        <div className="container clearfix"> 
                        <div className='row'>
    <div className="col-lg-4 people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        {/* <i className="icofont-search-1"></i> */}
      </div>
     <div style={{width:'100%',height:45,background:'gray',display:'flex',flexDirection:'row'}}>
     <div style={{width:'50%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #85bb71'}}>Chat</div>
     <div style={{width:'50%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>Contact</div>
     </div>
      <ul className="list">
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Vincent Porter</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Vincent Porter</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Vincent Porter</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Vincent Porter</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Vincent Porter</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Aiden Chavez</div>
            <div className="status">
              <i className="icofont-circled-down offline"></i> offline
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Mike Thomas</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Erica Hughes</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Ginger Johnston</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Tracy Carpenter</div>
            <div className="status">
              <i className="icofont-circled-down offline"></i> offline
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Christian Kelly</div>
            <div className="status">
              <i className="icofont-circled-down offline"></i> offline
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Monica Ward</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Dean Henry</div>
            <div className="status">
              <i className="icofont-circled-down offline"></i> offline
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar" />
          <div className="about">
            <div className="name">Peyton Mckinney</div>
            <div className="status">
              <i className="icofont-circled-down online"></i> online
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div className="chat col-lg-8">
      <div className="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div className="chat-about">
          <div className="chat-with">Chat with Vincent Porter</div>
          <div className="chat-num-messages">already 1 902 messages</div>
        </div>
        <i className="icofont-star"></i>
      </div>
       {/* <!-- end chat-header --> */}
      
      <div className="chat-history">
        <ul className="list">
          <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="icofont-circled-down me"></i>
              
            </div>
            <div className="message other-message float-right">
              Hi Vincent, how are you? How is the project coming along?
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="icofont-circled-down online"></i> Vincent</span>
              <span className="message-data-time">10:12 AM, Today</span>
            </div>
            <div className="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </li>
          
          <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="icofont-circled-down me"></i>
              
            </div>
            <div className="message other-message float-right">
              Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="icofont-circled-down online"></i> Vincent</span>
              <span className="message-data-time">10:20 AM, Today</span>
            </div>
            <div className="message my-message">
              Actually everything was fine. I'm very excited to show this to our team.
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="icofont-circled-down online"></i> Vincent</span>
              <span className="message-data-time">10:31 AM, Today</span>
            </div>
            <i className="icofont-circled-down online"></i>
            <i className="icofont-circled-down online" style={{color: "#AED2A6"}}></i>
            <i className="icofont-circled-down online" style={{color:"#DAE9DA"}}></i>
          </li>
          
        </ul>
        
      </div> 
      {/* <!-- end chat-history --> */}
      
      <div className="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                
        <i className="icofont-paper-clip"></i> &nbsp;&nbsp;&nbsp;
        <i className="icofont-image"></i>
        
        <button>Send</button>

      </div>
       {/* <!-- end chat-message --> */}
      
    </div>
     {/* <!-- end chat --> */}
     </div>
  </div>
  </div>
  </div>
  </div>
   {/* <!-- end container --> */}
{/* 
<script id="message-template" type="text/x-handlebars-template">
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time" >2:20, Today</span> &nbsp; &nbsp;
      <span className="message-data-name" >Olia</span> <i className="icofont-circled-down me"></i>
    </div>
    <div className="message other-message float-right">
      {'{messageOutput}'}
    </div>
  </li>
</script>

<script id="message-response-template" type="text/x-handlebars-template">
  <li>
    <div className="message-data">
      <span className="message-data-name"><i className="icofont-circled-down online"></i> Vincent</span>
      <span className="message-data-time">2:20, Today</span>
    </div>
    <div className="message my-message">
      {'{response}'}
    </div>
  </li>
</script>  */}
</div>

)
    }
}
