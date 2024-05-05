export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      voorraad: {
        Row: {
          aandrijving: string | null
          aantal_assen: string | null
          aantal_cilinders: string | null
          aantal_deuren: string | null
          aantal_eigenaren: string | null
          aantal_versnellingen: string | null
          aantal_zitplaatsen: string | null
          accessoires: string | null
          accu_conditie: string | null
          accu_laadsnelheid: string | null
          accu_laadtijd: string | null
          accu_snellaadsnelheid: string | null
          accu_snellaadtijd: string | null
          actieprijs_bedrag: string | null
          actieprijs_bpm: string | null
          actieprijs_btw: string | null
          actieprijs_btw_percentage: string | null
          actieprijs_munteenheid: string | null
          afbeeldingen: string | null
          apk_bij_aflevering: string | null
          apk_tot: string | null
          assen_aangedreven: string | null
          attachment_passend_op: string | null
          basiskleur: string | null
          bekleding: string | null
          bieden_toestaan: string | null
          bijtelling_pct: string | null
          bouwjaar: string | null
          bovenarmlengte: string | null
          bovenarmlengte_eenheid: string | null
          bpm_bedrag: string | null
          brandstof: string | null
          breedte: string | null
          btw_marge: string | null
          carrosserie: string | null
          cilinderinhoud: string | null
          co2_uitstoot: string | null
          datum_binnenkomst: string | null
          datum_deel_1: string | null
          datum_deel_1a: string | null
          datum_deel_1b: string | null
          doorvoercapaciteit: string | null
          doorvoercapaciteit_eenheid: string | null
          emissieklasse: string | null
          exportprijs_bedrag: string | null
          exportprijs_btw: string | null
          exportprijs_btw_percentage: string | null
          exportprijs_munteenheid: string | null
          extra01_naam: string | null
          extra01_waarde: string | null
          extra02_naam: string | null
          extra03_naam: string | null
          extra04_naam: string | null
          extra05_naam: string | null
          extra05_waarde: string | null
          extra06_naam: string | null
          extra06_waarde: string | null
          fijnstof_uitstoot: string | null
          fiscale_waarde: string | null
          garantielabel1_maanden: string | null
          garantielabel1_naam: string | null
          garantielabel1_type: string | null
          garantielabel2_maanden: string | null
          garantielabel2_naam: string | null
          garantielabel2_type: string | null
          garantielabel3_maanden: string | null
          garantielabel3_naam: string | null
          garantielabel3_type: string | null
          gemiddeld_verbruik: string | null
          generatorvermogen: string | null
          generatorvermogen_eenheid: string | null
          gvw: string | null
          highlights: string | null
          highlights_bulgaars: string | null
          highlights_duits: string | null
          highlights_engels: string | null
          highlights_frans: string | null
          highlights_grieks: string | null
          highlights_hongaars: string | null
          highlights_italiaans: string | null
          highlights_kroatisch: string | null
          highlights_pools: string | null
          highlights_portugees: string | null
          highlights_roemeens: string | null
          highlights_russisch: string | null
          highlights_spaans: string | null
          highlights_tsjechisch: string | null
          interieurkleur: string | null
          kenteken: string | null
          klantnummer: string | null
          klassieker: string | null
          kleur: string | null
          koppel: string | null
          kosten_rijklaar: string | null
          kraan: string | null
          laadklep: string | null
          laadschopinhoud: string | null
          laadschopinhoud_eenheid: string | null
          laadvermogen: string | null
          laktint: string | null
          land: string | null
          massa: string | null
          mastlengte: string | null
          mastlengte_eenheid: string | null
          max_trekgewicht_ongeremd: string | null
          maximale_koeltemperatuur: string | null
          maximale_koeltemperatuur_eenheid: string | null
          maximale_reikwijdte: string | null
          maximale_reikwijdte_eenheid: string | null
          meeneemprijs_bedrag: string | null
          meeneemprijs_bpm: string | null
          meeneemprijs_btw: string | null
          meeneemprijs_btw_percentage: string | null
          meeneemprijs_munteenheid: string | null
          meldcode: string | null
          merk: string | null
          minimale_koeltemperatuur: string | null
          minimale_koeltemperatuur_eenheid: string | null
          model: string | null
          modeldatum_tot: string | null
          modeldatum_vanaf: string | null
          nap_weblabel: string | null
          netto_catalogusprijs: string | null
          nieuw: string | null
          nieuwprijs: string | null
          oldtimer: string | null
          onderhoudsboekjes: string | null
          "opbouw[hoogte]": string | null
          opmerkingen: string | null
          opmerkingen_bulgaars: string | null
          opmerkingen_duits: string | null
          opmerkingen_engels: string | null
          opmerkingen_frans: string | null
          opmerkingen_garantie: string | null
          opmerkingen_grieks: string | null
          opmerkingen_handel: string | null
          opmerkingen_handel_bulgaars: string | null
          opmerkingen_handel_duits: string | null
          opmerkingen_handel_engels: string | null
          opmerkingen_handel_frans: string | null
          opmerkingen_handel_grieks: string | null
          opmerkingen_handel_hongaars: string | null
          opmerkingen_handel_italiaans: string | null
          opmerkingen_handel_kroatisch: string | null
          opmerkingen_handel_pools: string | null
          opmerkingen_handel_portugees: string | null
          opmerkingen_handel_roemeens: string | null
          opmerkingen_handel_russisch: string | null
          opmerkingen_handel_spaans: string | null
          opmerkingen_handel_tsjechisch: string | null
          opmerkingen_hongaars: string | null
          opmerkingen_italiaans: string | null
          opmerkingen_kroatisch: string | null
          opmerkingen_pools: string | null
          opmerkingen_portugees: string | null
          opmerkingen_roemeens: string | null
          opmerkingen_russisch: string | null
          opmerkingen_spaans: string | null
          opmerkingen_tsjechisch: string | null
          prijs_nieuw_herberekend: string | null
          prijstype: string | null
          rupsbandbreedte: string | null
          rupsbandbreedte_eenheid: string | null
          staat_interieur: string | null
          staat_optisch: string | null
          standaardopmerkingen: string | null
          standaardopmerkingen_bulgaars: string | null
          standaardopmerkingen_duits: string | null
          standaardopmerkingen_engels: string | null
          standaardopmerkingen_frans: string | null
          standaardopmerkingen_grieks: string | null
          standaardopmerkingen_hongaars: string | null
          standaardopmerkingen_italiaans: string | null
          standaardopmerkingen_kroatisch: string | null
          standaardopmerkingen_pools: string | null
          standaardopmerkingen_portugees: string | null
          standaardopmerkingen_roemeens: string | null
          standaardopmerkingen_russisch: string | null
          standaardopmerkingen_spaans: string | null
          standaardopmerkingen_tsjechisch: string | null
          tellerstand: string | null
          tellerstand_eenheid: string | null
          titel: string | null
          titel_bulgaars: string | null
          titel_duits: string | null
          titel_engels: string | null
          titel_frans: string | null
          titel_grieks: string | null
          titel_hongaars: string | null
          titel_italiaans: string | null
          titel_kroatisch: string | null
          titel_pools: string | null
          titel_portugees: string | null
          titel_roemeens: string | null
          titel_russisch: string | null
          titel_spaans: string | null
          titel_tsjechisch: string | null
          toepassingsgebied: string | null
          toepassingsmateriaal: string | null
          transmissie: string | null
          type: string | null
          verbruik_snelweg: string | null
          verbruik_stad: string | null
          verhoogd: string | null
          verkocht: string | null
          verkocht_datum: string | null
          verkoopprijs_handel_bedrag: string | null
          verkoopprijs_handel_bpm: string | null
          verkoopprijs_handel_btw: string | null
          verkoopprijs_handel_btw_percentage: string | null
          verkoopprijs_handel_munteenheid: string | null
          verkoopprijs_particulier_bedrag: string | null
          verkoopprijs_particulier_bpm: string | null
          verkoopprijs_particulier_btw: string | null
          verkoopprijs_particulier_btw_percentage: string | null
          verkoopprijs_particulier_munteenheid: string | null
          verlengd: string | null
          vermogen_brandstof_kw: string | null
          vermogen_brandstof_pk: string | null
          vermogen_motor_kw: string | null
          vermogen_motor_pk: string | null
          verplaatsing: string | null
          verwacht: string | null
          voedingsspanning: string | null
          voedingsspanning_eenheid: string | null
          voertuignr: string | null
          voertuignr_hexon: string
          voertuignr_klant: string | null
          voertuigsoort: string | null
          wegenbelasting_kwartaal_max: string | null
          wegenbelasting_kwartaal_min: string | null
          wielbasis: string | null
          zoektermen: string | null
          zoektermen_bulgaars: string | null
          zoektermen_duits: string | null
          zoektermen_engels: string | null
          zoektermen_frans: string | null
          zoektermen_grieks: string | null
          zoektermen_hongaars: string | null
          zoektermen_italiaans: string | null
          zoektermen_kroatisch: string | null
          zoektermen_pools: string | null
          zoektermen_portugees: string | null
          zoektermen_roemeens: string | null
          zoektermen_russisch: string | null
          zoektermen_spaans: string | null
          zoektermen_tsjechisch: string | null
        }
        Insert: {
          aandrijving?: string | null
          aantal_assen?: string | null
          aantal_cilinders?: string | null
          aantal_deuren?: string | null
          aantal_eigenaren?: string | null
          aantal_versnellingen?: string | null
          aantal_zitplaatsen?: string | null
          accessoires?: string | null
          accu_conditie?: string | null
          accu_laadsnelheid?: string | null
          accu_laadtijd?: string | null
          accu_snellaadsnelheid?: string | null
          accu_snellaadtijd?: string | null
          actieprijs_bedrag?: string | null
          actieprijs_bpm?: string | null
          actieprijs_btw?: string | null
          actieprijs_btw_percentage?: string | null
          actieprijs_munteenheid?: string | null
          afbeeldingen?: string | null
          apk_bij_aflevering?: string | null
          apk_tot?: string | null
          assen_aangedreven?: string | null
          attachment_passend_op?: string | null
          basiskleur?: string | null
          bekleding?: string | null
          bieden_toestaan?: string | null
          bijtelling_pct?: string | null
          bouwjaar?: string | null
          bovenarmlengte?: string | null
          bovenarmlengte_eenheid?: string | null
          bpm_bedrag?: string | null
          brandstof?: string | null
          breedte?: string | null
          btw_marge?: string | null
          carrosserie?: string | null
          cilinderinhoud?: string | null
          co2_uitstoot?: string | null
          datum_binnenkomst?: string | null
          datum_deel_1?: string | null
          datum_deel_1a?: string | null
          datum_deel_1b?: string | null
          doorvoercapaciteit?: string | null
          doorvoercapaciteit_eenheid?: string | null
          emissieklasse?: string | null
          exportprijs_bedrag?: string | null
          exportprijs_btw?: string | null
          exportprijs_btw_percentage?: string | null
          exportprijs_munteenheid?: string | null
          extra01_naam?: string | null
          extra01_waarde?: string | null
          extra02_naam?: string | null
          extra03_naam?: string | null
          extra04_naam?: string | null
          extra05_naam?: string | null
          extra05_waarde?: string | null
          extra06_naam?: string | null
          extra06_waarde?: string | null
          fijnstof_uitstoot?: string | null
          fiscale_waarde?: string | null
          garantielabel1_maanden?: string | null
          garantielabel1_naam?: string | null
          garantielabel1_type?: string | null
          garantielabel2_maanden?: string | null
          garantielabel2_naam?: string | null
          garantielabel2_type?: string | null
          garantielabel3_maanden?: string | null
          garantielabel3_naam?: string | null
          garantielabel3_type?: string | null
          gemiddeld_verbruik?: string | null
          generatorvermogen?: string | null
          generatorvermogen_eenheid?: string | null
          gvw?: string | null
          highlights?: string | null
          highlights_bulgaars?: string | null
          highlights_duits?: string | null
          highlights_engels?: string | null
          highlights_frans?: string | null
          highlights_grieks?: string | null
          highlights_hongaars?: string | null
          highlights_italiaans?: string | null
          highlights_kroatisch?: string | null
          highlights_pools?: string | null
          highlights_portugees?: string | null
          highlights_roemeens?: string | null
          highlights_russisch?: string | null
          highlights_spaans?: string | null
          highlights_tsjechisch?: string | null
          interieurkleur?: string | null
          kenteken?: string | null
          klantnummer?: string | null
          klassieker?: string | null
          kleur?: string | null
          koppel?: string | null
          kosten_rijklaar?: string | null
          kraan?: string | null
          laadklep?: string | null
          laadschopinhoud?: string | null
          laadschopinhoud_eenheid?: string | null
          laadvermogen?: string | null
          laktint?: string | null
          land?: string | null
          massa?: string | null
          mastlengte?: string | null
          mastlengte_eenheid?: string | null
          max_trekgewicht_ongeremd?: string | null
          maximale_koeltemperatuur?: string | null
          maximale_koeltemperatuur_eenheid?: string | null
          maximale_reikwijdte?: string | null
          maximale_reikwijdte_eenheid?: string | null
          meeneemprijs_bedrag?: string | null
          meeneemprijs_bpm?: string | null
          meeneemprijs_btw?: string | null
          meeneemprijs_btw_percentage?: string | null
          meeneemprijs_munteenheid?: string | null
          meldcode?: string | null
          merk?: string | null
          minimale_koeltemperatuur?: string | null
          minimale_koeltemperatuur_eenheid?: string | null
          model?: string | null
          modeldatum_tot?: string | null
          modeldatum_vanaf?: string | null
          nap_weblabel?: string | null
          netto_catalogusprijs?: string | null
          nieuw?: string | null
          nieuwprijs?: string | null
          oldtimer?: string | null
          onderhoudsboekjes?: string | null
          "opbouw[hoogte]"?: string | null
          opmerkingen?: string | null
          opmerkingen_bulgaars?: string | null
          opmerkingen_duits?: string | null
          opmerkingen_engels?: string | null
          opmerkingen_frans?: string | null
          opmerkingen_garantie?: string | null
          opmerkingen_grieks?: string | null
          opmerkingen_handel?: string | null
          opmerkingen_handel_bulgaars?: string | null
          opmerkingen_handel_duits?: string | null
          opmerkingen_handel_engels?: string | null
          opmerkingen_handel_frans?: string | null
          opmerkingen_handel_grieks?: string | null
          opmerkingen_handel_hongaars?: string | null
          opmerkingen_handel_italiaans?: string | null
          opmerkingen_handel_kroatisch?: string | null
          opmerkingen_handel_pools?: string | null
          opmerkingen_handel_portugees?: string | null
          opmerkingen_handel_roemeens?: string | null
          opmerkingen_handel_russisch?: string | null
          opmerkingen_handel_spaans?: string | null
          opmerkingen_handel_tsjechisch?: string | null
          opmerkingen_hongaars?: string | null
          opmerkingen_italiaans?: string | null
          opmerkingen_kroatisch?: string | null
          opmerkingen_pools?: string | null
          opmerkingen_portugees?: string | null
          opmerkingen_roemeens?: string | null
          opmerkingen_russisch?: string | null
          opmerkingen_spaans?: string | null
          opmerkingen_tsjechisch?: string | null
          prijs_nieuw_herberekend?: string | null
          prijstype?: string | null
          rupsbandbreedte?: string | null
          rupsbandbreedte_eenheid?: string | null
          staat_interieur?: string | null
          staat_optisch?: string | null
          standaardopmerkingen?: string | null
          standaardopmerkingen_bulgaars?: string | null
          standaardopmerkingen_duits?: string | null
          standaardopmerkingen_engels?: string | null
          standaardopmerkingen_frans?: string | null
          standaardopmerkingen_grieks?: string | null
          standaardopmerkingen_hongaars?: string | null
          standaardopmerkingen_italiaans?: string | null
          standaardopmerkingen_kroatisch?: string | null
          standaardopmerkingen_pools?: string | null
          standaardopmerkingen_portugees?: string | null
          standaardopmerkingen_roemeens?: string | null
          standaardopmerkingen_russisch?: string | null
          standaardopmerkingen_spaans?: string | null
          standaardopmerkingen_tsjechisch?: string | null
          tellerstand?: string | null
          tellerstand_eenheid?: string | null
          titel?: string | null
          titel_bulgaars?: string | null
          titel_duits?: string | null
          titel_engels?: string | null
          titel_frans?: string | null
          titel_grieks?: string | null
          titel_hongaars?: string | null
          titel_italiaans?: string | null
          titel_kroatisch?: string | null
          titel_pools?: string | null
          titel_portugees?: string | null
          titel_roemeens?: string | null
          titel_russisch?: string | null
          titel_spaans?: string | null
          titel_tsjechisch?: string | null
          toepassingsgebied?: string | null
          toepassingsmateriaal?: string | null
          transmissie?: string | null
          type?: string | null
          verbruik_snelweg?: string | null
          verbruik_stad?: string | null
          verhoogd?: string | null
          verkocht?: string | null
          verkocht_datum?: string | null
          verkoopprijs_handel_bedrag?: string | null
          verkoopprijs_handel_bpm?: string | null
          verkoopprijs_handel_btw?: string | null
          verkoopprijs_handel_btw_percentage?: string | null
          verkoopprijs_handel_munteenheid?: string | null
          verkoopprijs_particulier_bedrag?: string | null
          verkoopprijs_particulier_bpm?: string | null
          verkoopprijs_particulier_btw?: string | null
          verkoopprijs_particulier_btw_percentage?: string | null
          verkoopprijs_particulier_munteenheid?: string | null
          verlengd?: string | null
          vermogen_brandstof_kw?: string | null
          vermogen_brandstof_pk?: string | null
          vermogen_motor_kw?: string | null
          vermogen_motor_pk?: string | null
          verplaatsing?: string | null
          verwacht?: string | null
          voedingsspanning?: string | null
          voedingsspanning_eenheid?: string | null
          voertuignr?: string | null
          voertuignr_hexon: string
          voertuignr_klant?: string | null
          voertuigsoort?: string | null
          wegenbelasting_kwartaal_max?: string | null
          wegenbelasting_kwartaal_min?: string | null
          wielbasis?: string | null
          zoektermen?: string | null
          zoektermen_bulgaars?: string | null
          zoektermen_duits?: string | null
          zoektermen_engels?: string | null
          zoektermen_frans?: string | null
          zoektermen_grieks?: string | null
          zoektermen_hongaars?: string | null
          zoektermen_italiaans?: string | null
          zoektermen_kroatisch?: string | null
          zoektermen_pools?: string | null
          zoektermen_portugees?: string | null
          zoektermen_roemeens?: string | null
          zoektermen_russisch?: string | null
          zoektermen_spaans?: string | null
          zoektermen_tsjechisch?: string | null
        }
        Update: {
          aandrijving?: string | null
          aantal_assen?: string | null
          aantal_cilinders?: string | null
          aantal_deuren?: string | null
          aantal_eigenaren?: string | null
          aantal_versnellingen?: string | null
          aantal_zitplaatsen?: string | null
          accessoires?: string | null
          accu_conditie?: string | null
          accu_laadsnelheid?: string | null
          accu_laadtijd?: string | null
          accu_snellaadsnelheid?: string | null
          accu_snellaadtijd?: string | null
          actieprijs_bedrag?: string | null
          actieprijs_bpm?: string | null
          actieprijs_btw?: string | null
          actieprijs_btw_percentage?: string | null
          actieprijs_munteenheid?: string | null
          afbeeldingen?: string | null
          apk_bij_aflevering?: string | null
          apk_tot?: string | null
          assen_aangedreven?: string | null
          attachment_passend_op?: string | null
          basiskleur?: string | null
          bekleding?: string | null
          bieden_toestaan?: string | null
          bijtelling_pct?: string | null
          bouwjaar?: string | null
          bovenarmlengte?: string | null
          bovenarmlengte_eenheid?: string | null
          bpm_bedrag?: string | null
          brandstof?: string | null
          breedte?: string | null
          btw_marge?: string | null
          carrosserie?: string | null
          cilinderinhoud?: string | null
          co2_uitstoot?: string | null
          datum_binnenkomst?: string | null
          datum_deel_1?: string | null
          datum_deel_1a?: string | null
          datum_deel_1b?: string | null
          doorvoercapaciteit?: string | null
          doorvoercapaciteit_eenheid?: string | null
          emissieklasse?: string | null
          exportprijs_bedrag?: string | null
          exportprijs_btw?: string | null
          exportprijs_btw_percentage?: string | null
          exportprijs_munteenheid?: string | null
          extra01_naam?: string | null
          extra01_waarde?: string | null
          extra02_naam?: string | null
          extra03_naam?: string | null
          extra04_naam?: string | null
          extra05_naam?: string | null
          extra05_waarde?: string | null
          extra06_naam?: string | null
          extra06_waarde?: string | null
          fijnstof_uitstoot?: string | null
          fiscale_waarde?: string | null
          garantielabel1_maanden?: string | null
          garantielabel1_naam?: string | null
          garantielabel1_type?: string | null
          garantielabel2_maanden?: string | null
          garantielabel2_naam?: string | null
          garantielabel2_type?: string | null
          garantielabel3_maanden?: string | null
          garantielabel3_naam?: string | null
          garantielabel3_type?: string | null
          gemiddeld_verbruik?: string | null
          generatorvermogen?: string | null
          generatorvermogen_eenheid?: string | null
          gvw?: string | null
          highlights?: string | null
          highlights_bulgaars?: string | null
          highlights_duits?: string | null
          highlights_engels?: string | null
          highlights_frans?: string | null
          highlights_grieks?: string | null
          highlights_hongaars?: string | null
          highlights_italiaans?: string | null
          highlights_kroatisch?: string | null
          highlights_pools?: string | null
          highlights_portugees?: string | null
          highlights_roemeens?: string | null
          highlights_russisch?: string | null
          highlights_spaans?: string | null
          highlights_tsjechisch?: string | null
          interieurkleur?: string | null
          kenteken?: string | null
          klantnummer?: string | null
          klassieker?: string | null
          kleur?: string | null
          koppel?: string | null
          kosten_rijklaar?: string | null
          kraan?: string | null
          laadklep?: string | null
          laadschopinhoud?: string | null
          laadschopinhoud_eenheid?: string | null
          laadvermogen?: string | null
          laktint?: string | null
          land?: string | null
          massa?: string | null
          mastlengte?: string | null
          mastlengte_eenheid?: string | null
          max_trekgewicht_ongeremd?: string | null
          maximale_koeltemperatuur?: string | null
          maximale_koeltemperatuur_eenheid?: string | null
          maximale_reikwijdte?: string | null
          maximale_reikwijdte_eenheid?: string | null
          meeneemprijs_bedrag?: string | null
          meeneemprijs_bpm?: string | null
          meeneemprijs_btw?: string | null
          meeneemprijs_btw_percentage?: string | null
          meeneemprijs_munteenheid?: string | null
          meldcode?: string | null
          merk?: string | null
          minimale_koeltemperatuur?: string | null
          minimale_koeltemperatuur_eenheid?: string | null
          model?: string | null
          modeldatum_tot?: string | null
          modeldatum_vanaf?: string | null
          nap_weblabel?: string | null
          netto_catalogusprijs?: string | null
          nieuw?: string | null
          nieuwprijs?: string | null
          oldtimer?: string | null
          onderhoudsboekjes?: string | null
          "opbouw[hoogte]"?: string | null
          opmerkingen?: string | null
          opmerkingen_bulgaars?: string | null
          opmerkingen_duits?: string | null
          opmerkingen_engels?: string | null
          opmerkingen_frans?: string | null
          opmerkingen_garantie?: string | null
          opmerkingen_grieks?: string | null
          opmerkingen_handel?: string | null
          opmerkingen_handel_bulgaars?: string | null
          opmerkingen_handel_duits?: string | null
          opmerkingen_handel_engels?: string | null
          opmerkingen_handel_frans?: string | null
          opmerkingen_handel_grieks?: string | null
          opmerkingen_handel_hongaars?: string | null
          opmerkingen_handel_italiaans?: string | null
          opmerkingen_handel_kroatisch?: string | null
          opmerkingen_handel_pools?: string | null
          opmerkingen_handel_portugees?: string | null
          opmerkingen_handel_roemeens?: string | null
          opmerkingen_handel_russisch?: string | null
          opmerkingen_handel_spaans?: string | null
          opmerkingen_handel_tsjechisch?: string | null
          opmerkingen_hongaars?: string | null
          opmerkingen_italiaans?: string | null
          opmerkingen_kroatisch?: string | null
          opmerkingen_pools?: string | null
          opmerkingen_portugees?: string | null
          opmerkingen_roemeens?: string | null
          opmerkingen_russisch?: string | null
          opmerkingen_spaans?: string | null
          opmerkingen_tsjechisch?: string | null
          prijs_nieuw_herberekend?: string | null
          prijstype?: string | null
          rupsbandbreedte?: string | null
          rupsbandbreedte_eenheid?: string | null
          staat_interieur?: string | null
          staat_optisch?: string | null
          standaardopmerkingen?: string | null
          standaardopmerkingen_bulgaars?: string | null
          standaardopmerkingen_duits?: string | null
          standaardopmerkingen_engels?: string | null
          standaardopmerkingen_frans?: string | null
          standaardopmerkingen_grieks?: string | null
          standaardopmerkingen_hongaars?: string | null
          standaardopmerkingen_italiaans?: string | null
          standaardopmerkingen_kroatisch?: string | null
          standaardopmerkingen_pools?: string | null
          standaardopmerkingen_portugees?: string | null
          standaardopmerkingen_roemeens?: string | null
          standaardopmerkingen_russisch?: string | null
          standaardopmerkingen_spaans?: string | null
          standaardopmerkingen_tsjechisch?: string | null
          tellerstand?: string | null
          tellerstand_eenheid?: string | null
          titel?: string | null
          titel_bulgaars?: string | null
          titel_duits?: string | null
          titel_engels?: string | null
          titel_frans?: string | null
          titel_grieks?: string | null
          titel_hongaars?: string | null
          titel_italiaans?: string | null
          titel_kroatisch?: string | null
          titel_pools?: string | null
          titel_portugees?: string | null
          titel_roemeens?: string | null
          titel_russisch?: string | null
          titel_spaans?: string | null
          titel_tsjechisch?: string | null
          toepassingsgebied?: string | null
          toepassingsmateriaal?: string | null
          transmissie?: string | null
          type?: string | null
          verbruik_snelweg?: string | null
          verbruik_stad?: string | null
          verhoogd?: string | null
          verkocht?: string | null
          verkocht_datum?: string | null
          verkoopprijs_handel_bedrag?: string | null
          verkoopprijs_handel_bpm?: string | null
          verkoopprijs_handel_btw?: string | null
          verkoopprijs_handel_btw_percentage?: string | null
          verkoopprijs_handel_munteenheid?: string | null
          verkoopprijs_particulier_bedrag?: string | null
          verkoopprijs_particulier_bpm?: string | null
          verkoopprijs_particulier_btw?: string | null
          verkoopprijs_particulier_btw_percentage?: string | null
          verkoopprijs_particulier_munteenheid?: string | null
          verlengd?: string | null
          vermogen_brandstof_kw?: string | null
          vermogen_brandstof_pk?: string | null
          vermogen_motor_kw?: string | null
          vermogen_motor_pk?: string | null
          verplaatsing?: string | null
          verwacht?: string | null
          voedingsspanning?: string | null
          voedingsspanning_eenheid?: string | null
          voertuignr?: string | null
          voertuignr_hexon?: string
          voertuignr_klant?: string | null
          voertuigsoort?: string | null
          wegenbelasting_kwartaal_max?: string | null
          wegenbelasting_kwartaal_min?: string | null
          wielbasis?: string | null
          zoektermen?: string | null
          zoektermen_bulgaars?: string | null
          zoektermen_duits?: string | null
          zoektermen_engels?: string | null
          zoektermen_frans?: string | null
          zoektermen_grieks?: string | null
          zoektermen_hongaars?: string | null
          zoektermen_italiaans?: string | null
          zoektermen_kroatisch?: string | null
          zoektermen_pools?: string | null
          zoektermen_portugees?: string | null
          zoektermen_roemeens?: string | null
          zoektermen_russisch?: string | null
          zoektermen_spaans?: string | null
          zoektermen_tsjechisch?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
