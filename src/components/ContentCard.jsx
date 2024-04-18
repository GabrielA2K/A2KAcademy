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
}

export default ContentCard;