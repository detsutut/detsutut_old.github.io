function clearHtmlData() {
    $('#itemContainer').empty();
    $('#itemContainer').append("<span class='timeline-label'><span class='label bg-primary'>Today</span></span>");
}

function loadHtmlData(filter = null) {
    for (index in data) {
        var dataItem = data[index]
        var newHtml = "";
        switch (dataItem.type) {
            case 'job':
                if (filter != null && filter != 'job') break;
                topicHtml = "";
                for (topicIndex in dataItem.topics) {
                    var topic = dataItem.topics[topicIndex];
                    topicHtml += `
                  <kbd style='cursor:pointer; background-color:#e76c90;'>${topic}</kbd>                                        
                  `
                }
                newHtml = `
                      <div class='timeline-item' id='TI${index}'>
                          <div class='timeline-point timeline-point'></div>
                          <div class='timeline-event'>
                              <div class='widget has-shadow'>
                                  <div class='widget-header d-flex align-items-center'>
                                      <div class='user-image'>
                                          <img class='rounded-circle' src=${dataItem.image} alt='...'>
                                      </div>
                                      <div class='d-flex flex-column mr-auto'>
                                          <div class='title'>
                                              <span class='username'>${dataItem.title}</span><br>
                                              ${dataItem.subtitle}
                                          </div>
                                      </div>
                                  </div>
                                  <div class='widget-body'>
                                      <p>
                                          ${dataItem.description}
                                      </p>
                                      <p>
                                          ${topicHtml}
                                      </p>
                                  </div>
                                  <div class='widget-footer'>
                                      <div class='row'>
                                          <div class='col'>
                                              <a href=${dataItem.location.link} target='_blank'
                                                  style='text-decoration: none; '><i class='la la-map-marker'
                                                      style='text-decoration: none; color:#e76c90; font-size: 1.0rem;'><span
                                                          style='font-weight:100 ;font-family: Arial, Helvetica, sans-serif;'>${dataItem.location.place}</span></i></a>
                                          </div>
                                          <div class='col'>
                                              <i class='la la-calendar'
                                                  style='text-decoration: none; color:#e76c90; font-size: 1.0rem;'><span
                                                      style='font-weight:100 ;font-family: Arial, Helvetica, sans-serif;'>${dataItem.date.start}
                                                      - ${dataItem.date.end}</span></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class='time-right'>${dataItem.date.start}</div>
                          </div>
                      </div>
                      `;
                break;
            case 'paper':
                if (filter != null && filter != 'paper') break;
                newHtml = `<div id='itemid${index}' class='timeline-item'>\
                          <div class='timeline-point timeline-point'\
                              style='background-color: #00aced; color: #00aced;'></div>\
                          <div class='timeline-event'>\
                              <div class='widget icon-widget has-shadow' style='background-color: #00aced;'>\
                                  <div class='widget-body' style='color: #fff;'>\
                                      <div class='media'>\
                                          <div class='media-left '>\
                                              <i class='la la-newspaper-o' style='font-size: 4rem;'></i>\
                                          </div>\
                                          <div class='media-body align-self-center pl-4'>\
                                              <strong>${dataItem.title}</strong><br>\
                                              <i>${dataItem.subtitle}</i><br><br>${dataItem.description}</div>\
                                      </div>\
                                  </div>\
                                  <div class='widget-footer no-bg no-border pt-0 d-flex justify-content-end'>\
                                      <div class='meta' style='font-size: 0.85rem;'>\
                                          <ul>\
                                              <li><a href=${dataItem.footer} target='_blank'><span class='numb' style='color: #fff;'>Read more <i class='la la-external-link'></i></span></a></li>\
                                          </ul>\
                                      </div>\
                                  </div>\
                              </div>\
                              <div class='time-right'>${dataItem.date.start}</div>\
                          </div>\
                      </div>\
                      `;
                break;
            case 'project':
                if (filter != null && filter != 'project') break;
                newHtml = `
                      <div class='timeline-item'>
                          <div class='timeline-point timeline-point'
                              style='background-color: #fd6f71; color: #fd6f71;'></div>
                          <div class='timeline-event'>
                              <div class='widget icon-widget has-shadow' style='background-color: #fd6f71;'>
                                  <div class='widget-body' style='color: #fff;'>
                                      <div class='media'>
                                          <div class='media-left'>
                                              <i class='la la-flask' style='font-size: 4rem;'></i>
                                          </div>
                                          <div class='media-body align-self-center pl-4'>
                                              <strong>${dataItem.title}</strong><br>
                                              <i>${dataItem.subtitle}</i><br><br>
                                              ${dataItem.description}
                                          </div>
                                      </div>
                                  </div>
                                  <div class='widget-footer no-bg no-border pt-0 d-flex justify-content-end'>
                                      <div class='meta' style='font-size: 0.85rem;'>
                                          <ul>
                                              <li><a href=${dataItem.footer}
                                                      target='_blank'><span class='numb' style='color: #fff;'>Source
                                                          code <i class='la la-github'
                                                              style='color: #fff;'></i></span></a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div class='time-right'>${dataItem.date.start}</div>
                          </div>
                      </div>                    
                      `;
                break;
            case 'token':
                newHtml = `
                        <span class='timeline-label'>
                        <span class='label'>${dataItem.title}</span>
                        <br><br><br>
                        </span>
                        `;
                break;
            case 'special':
                newHtml = dataItem.content;
                break;
        }
        $('#itemContainer').append(newHtml);
    }
}