import './App.css'

const spreadsheetCategories = {
  'YAS': [
    { name: 'Appel Entrant YAS', url: 'https://docs.google.com/spreadsheets/d/1w7TkzeLqtx_gnVQQ6j0f_f__aTgfXRqh4DLLOdtYw9s/edit?usp=drive_link' },
    { name: 'Appel Sortant YAS', url: 'https://docs.google.com/spreadsheets/d/11SVI6xWNpwMRNX1kCfhM-AyEY5ks-Axlts4DMdRGq7E/edit?usp=drive_link' },
    { name: 'Digital YAS', url: 'https://docs.google.com/spreadsheets/d/1-EP57-ocAFLlFH4dIpxsWk9ieCl--RXm-8X9k2grQMc/edit?usp=drive_link' },
    { name: 'Entreprise YAS', url: 'https://docs.google.com/spreadsheets/d/1NoftcD4c9rUWmbjvzf8VVcWSj53JWfZ183jx73vy3hg/edit?usp=drive_link' },
    { name: 'Facturation YAS', url: 'https://docs.google.com/spreadsheets/d/1SOg5-DUT37DOBHRHtS9p5lofupyMkkvWhhFxTkeAiRA/edit?usp=drive_link' },
    { name: 'Internet et Courrier YAS', url: 'https://docs.google.com/spreadsheets/d/1_9y8xbDQGpwnIgrskvOViz5IRZ5sU03GYsdRKvE0mOM/edit?usp=drive_link' },
    { name: 'Mobile YAS', url: 'https://docs.google.com/spreadsheets/d/12xvs6cPyR_ByDtUTf87mlRn2CGUUS8vdPN-LJ3YjNK4/edit?usp=drive_link' },
    { name: 'Grand compte YAS', url: 'https://docs.google.com/spreadsheets/d/1wNm8rloGSD8dECNkRlG7uyeXmzv4UT9LI7Cpv8-nm0U/edit?usp=drive_link' },
    { name: 'Manager YAS', url: 'https://docs.google.com/spreadsheets/d/1w0GfkKajtvv_wiRQ-TiPO0GzDp1OSM8Y0bt3JeEdV6I/edit?usp=drive_link' },
    { name: 'Multimedia YAS', url: 'https://docs.google.com/spreadsheets/d/1b415pyrNFNAARNBiBmuhAKAZZ11RC5nyTwTFqxEM3F0/edit?usp=drive_link' },
    { name: 'Réclamation YAS', url: 'https://docs.google.com/spreadsheets/d/1UnKUBWAIqG2U4NmFmiiW2uq1qkixXz9PzMjaL0L1Cjw/edit?usp=drive_link' },
    { name: 'Rétention YAS', url: 'https://docs.google.com/spreadsheets/d/1BzpEXrHN1MDRNIorCXRp7INgn8lkA6c0f5hY5hFTdZc/edit?usp=drive_link' },
  ],
  'MVOLA': [
    { name: 'Appel Entrant MVOLA', url: 'https://docs.google.com/spreadsheets/d/1VxRbNHVbtMhwzhOiS6ULPmdj8CEfTogoTCamV42NisM/edit?usp=drive_link' },
    { name: 'Appel Sortant MVOLA', url: 'https://docs.google.com/spreadsheets/d/12uAfNN_zzzaUmaN6TpOf-4jiZgIdIaDoDVBJje6BpXk/edit?usp=drive_link' },
    { name: 'BO Universel MVOLA', url: 'https://docs.google.com/spreadsheets/d/1yzS1HriQijKvV3d7jbgyniiRIXYrk5zLXaVXgCANpYk/edit?usp=drive_link' },
    { name: 'Certif MVOLA', url: 'https://docs.google.com/spreadsheets/d/1E99ZvPbx8csP8vLa9paEW40MksZ9M59mCUEqSdmQJ8w/edit?usp=drive_link' },
    { name: 'Digital MVOLA', url: 'https://docs.google.com/spreadsheets/d/1EqC7ETVD8K9Nr6VQjMvhmzv7FIxqtNKy62Kr60t4sN4/edit?usp=drive_link' },
    { name: 'Grand Compte MVOLA', url: 'https://docs.google.com/spreadsheets/d/1cCesVqvQGybu0hiHmsmTsBFyR460nUfQkoX0pAuAk7A/edit?usp=drive_link' },
    { name: 'Réclamation et Activ MVOLA', url: 'https://docs.google.com/spreadsheets/d/1FHYUNpE7lDmyJ0ynPeYqnI5J-WMa4ZuFGmj6medm-yo/edit?usp=sharing' },
    { name: 'Requête MVOLA', url: 'https://docs.google.com/spreadsheets/d/14Hmyt2I8K_fv1Nl7uxOQ5L7mFybz9h-gEWry7a8WAss/edit?usp=drive_link' },
    { name: 'Manager MVOLA', url: 'https://docs.google.com/spreadsheets/d/1NaberhJUDYFI_A8f_Rr4h31FGlX4T-IhW34oerB1r4M/edit?usp=sharing' },
  ],
  'OPEN FIELD': [
    { name: 'INCOMM', url: 'https://docs.google.com/spreadsheets/d/1ifNwihwg9JecXgFisgjE9zGXhARr902TYCsA6YiGgiw/edit?usp=drive_link' },
    { name: 'ARO', url: 'https://docs.google.com/spreadsheets/d/1jnIOCK-vwxYS1Ys_0puTTtZTGgjfVf7HtUsRrZepR4U/edit?usp=drive_link' },
    { name: 'TELCO OI', url: 'https://docs.google.com/spreadsheets/d/1pR85FqfY8yxl_sRN0jKG5altUbUOjMnVVOUwnBDiZ3A/edit?usp=drive_link' },
    { name: 'WE LIGHT', url: 'https://docs.google.com/spreadsheets/d/1p6geRxvc0yLz4IKtBhKqydt0Ny-YFWBe0w-CkAc7zs4/edit?usp=drive_link' },
    { name: 'YAS COMORES', url: 'https://docs.google.com/spreadsheets/d/1RDjGrqHvnVBLAgRVUf7hoSBTQ7bqt7Cg6-fS6v1uqO8/edit?usp=drive_link' },
    { name: 'YAS Sénégal', url: 'https://docs.google.com/spreadsheets/d/1DSLLwPFGXH4LNed8WbejTXLw9PG7gIRVf-afpEahH4s/edit?usp=drive_link' },
    { name: 'Prodigy', url: 'https://docs.google.com/spreadsheets/d/1Dp_AJj6Xk7N_dof5mHiZpHdXdmaLatR_7Pv9tQlCZxU/edit?usp=drive_link' },
    { name: 'Stellarix', url: 'https://docs.google.com/spreadsheets/d/1y1v_lgZOy29Ee1Kz0Qd7eVci7fxkMSBpkES98vVBXKY/edit?usp=drive_link' },
    { name: 'Manager Openfield', url: 'https://docs.google.com/spreadsheets/d/1LkaBmW-6Eo0fjbloj6bHyH80HZs6FwgAXovBrLLnVuw/edit?usp=sharing' },
  ],
  'Offshore': [
    { name: 'Tersea', url: 'https://docs.google.com/spreadsheets/d/1ApB5T2ZaX3fazDtQ7GWD_6Ksq3djRp_NXll3-2wVuwQ/edit?usp=drive_link' },
    { name: 'ManPower', url: 'https://docs.google.com/spreadsheets/d/1qLFM3mzJIEHtm1PUvRJKTGe6CX1zNGhVTE-XWyJHk3Q/edit?usp=drive_link' },
    { name: 'Joko et ELM', url: 'https://docs.google.com/spreadsheets/d/1BG-KD3C54isbH_HyTZ8BoO90Ue8tpJUstzSqxUxz4QM/edit?usp=drive_link' },
    { name: 'Befor Bank', url: 'https://docs.google.com/spreadsheets/d/1SF8UST48KW7V6JNiAcNYdZAgWUv20uaJJmICvbCZsbw/edit?usp=drive_link' },
    { name: 'Manager Offshore', url: 'https://docs.google.com/spreadsheets/d/1Le018-XiGvCdif6J42pU9xGIxxLyAB2GTq9AYEWjRuk/edit?usp=drive_link' },
    { name: 'Conseilleur admin', url: 'https://docs.google.com/spreadsheets/d/1lxtC6gxZH2FbksIlqooC_ShqAHqgKFPtOdyYJgs1DHY/edit?usp=drive_link' },
  ],
}

function CategorySection({ title, items }) {
  return (
    <div className="category-section">
      <h2 className="category-title">{title}</h2>
      <div className="links-grid">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
            data-index={index}
          >
            <span className="link-name">{item.name}</span>
            <span className="link-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Fiche de Présence</h1>
        <p>Accès aux feuilles de calcul Google Sheets</p>
      </header>

      <main className="app-main">
        {Object.entries(spreadsheetCategories).map(([category, items]) => (
          <CategorySection key={category} title={category} items={items} />
        ))}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Fiche de Présence</p>
      </footer>
    </div>
  )
}

export default App
