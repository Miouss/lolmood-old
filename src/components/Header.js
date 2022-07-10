JAI TOUT SUPPRIME, IL VAUDRAIT MIEUX REFUSER CETTE PR :))))
            }}
          >
            <img style={{ width: frFlagWidth }} src={frenchFlag} />
          </div>

          <div
            onClick={() => {
              setEnFlag("100%");
              setFrFlag("50%");
              setLang("en");
            }}
          >
            <img style={{ width: enFlagWidth }} src={englishFlag} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
