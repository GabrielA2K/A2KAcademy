import './ContentCard.css'
import ImportIcon from "../assets/ImportIcon";
function ContentCard(params){


    if (params.variant == 'left'){
        return(
            <>
              <div className="content_card">
                <div className="card_head">
                  <div className="card_head_image" style={{backgroundImage: 'url('+params.background+')'}}></div>
                  <div className="card_head_container">
                    <div className="icon">
                      <ImportIcon name={params.iconName} />
                    </div>
                    <p className="card_head_text font-heavy">{params.title}</p>
                  </div>
                </div>
                <div className="card_body">
                  <div className="container">
                    <p className="font-light justify-text">{params.textContent}</p>
                  </div>
                </div>
                <div className="avatar" style={{backgroundImage: 'url('+params.avatarName+')'}}></div>
              </div>
            </>
        )
    }

    if (params.variant == 'right'){
        return(
            <>
              <div className="content_card">
                <div className="card_head alt">
                  <div className="card_head_image" style={{backgroundImage: 'url('+params.background+')'}}></div>
                  <div className="card_head_container">
                    <div className="icon alt">
                      <ImportIcon name={params.iconName} />
                    </div>
                    <p className="card_head_text font-heavy alt">{params.title}</p>
                  </div>
                </div>
                <div className="card_body">
                  <div className="container">
                    <p className="font-light justify-text">{params.textContent}</p>
                  </div>
                </div>
                <div className="avatar alt" style={{backgroundImage: 'url('+params.avatarName+')'}}></div>
              </div>
            </>
        )
    }

    if (params.variant == 'gallery'){
      return(
          <>
            <div className="content_card">
              <div className="card_head alt1">
                <div className="card_head_image" style={{backgroundImage: 'url('+params.background+')'}}></div>
                <div className="card_head_container">
                  <div className="icon alt1">
                    <ImportIcon name={params.iconName} />
                  </div>
                  <p className="card_head_text alt1 font-heavy">{params.title}</p>
                </div>
              </div>
              <div className="card_body alt1">
                <div className="container">
                  <div className="gallery">
                    <div className="photos_container">
                      <div className="photo">

                      </div>
                    </div>
                    <div className="pager">
                      <div className="ppage 1"></div>
                      <div className="ppage 2"></div>
                      <div className="ppage 3"></div>
                      <div className="ppage 4"></div>
                    </div>
                  </div>
                  <div className="text_container">
                    <p className="font-light center-text">{params.textContent}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </>
      )
  }
}

export default ContentCard;