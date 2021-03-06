//export const server = 'http://localhost:3030'; //local
export const server = 'https://cryptoinsane.herokuapp.com'; //production

export const symbols = [
  'ACT', 'ADA', 'ADX', 'AE', 'AION', 'AMP', 'ANT', 'ARDR', 'ARK', 'ATM', 'BAT', 'BAY', 'BCC', 'BCH', 'BCN', 'BDL', 'BELA', 'BLCN', 'BLK', 'BLOCK', 'BNB', 'BNT', 'BQ', 'BQX', 'BTC', 'BTCD', 'BTCZ', 'BTG', 'BTM', 'BTS', 'BTX', 'BURST', 'CLAM', 'CNX', 'CNY', 'CVC', 'DASH', 'DATA', 'DBC', 'DCN', 'DCR', 'DEFAULT', 'DENT', 'DGB', 'DGD', 'DOGE', 'DRGN', 'EDG', 'EDOGE', 'ELF', 'EMC', 'EMC2', 'ENG', 'EOS', 'ETC', 'ETH', 'ETHOS', 'ETN', 'ETP', 'EUR', 'EVX', 'EXMO', 'EXP', 'FAIR', 'FCT', 'FIL', 'FLDC', 'FLO', 'FUN', 'GAME', 'GAS', 'GBP', 'GBX', 'GBYTE', 'GNO', 'GNT', 'GRC', 'GRS', 'GUP', 'GXS', 'HSR', 'HUC', 'HUSH', 'ICN', 'ICX', 'JPY', 'KCS', 'KIN', 'KMD', 'KNC', 'KRB', 'LBC', 'LINK', 'LKK', 'LRC', 'LSK', 'LTC', 'MAID', 'MANA', 'MCAP', 'MCO', 'MIOTA', 'MLN', 'MNX', 'MONA', 'MTL', 'MUSIC', 'NAV', 'NEBL', 'NEO', 'NEOS', 'NLC2', 'NLG', 'NMC', 'NXS', 'NXT', 'OMG', 'OMNI', 'PART', 'PASL', 'PAY', 'PINK', 'PIVX', 'POE', 'POT', 'POWR', 'PPC', 'PPT', 'PURA', 'QASH', 'QIWI', 'QSP', 'QTUM', 'RADS', 'RCN', 'RDD', 'RDN', 'REP', 'REQ', 'RHOC', 'RIC', 'RLC', 'RUB', 'SALT', 'SAN', 'SBD', 'SBERBANK', 'SC', 'SKY', 'SMART', 'SNGLS', 'SNT', 'START', 'STEEM', 'STORJ', 'STORM', 'STRAT', 'SUB', 'TAAS', 'TKN', 'TRX', 'TZC', 'UBQ', 'USD', 'USDT', 'VEN', 'VERI', 'VIA', 'VIVO', 'VRC', 'VTC', 'WAVES', 'WAX', 'WTC', 'XBC', 'XCP', 'XDN', 'XEM', 'XLM', 'XMR', 'XPM', 'XRB', 'XRP', 'XTZ', 'XUC', 'XVC', 'XVG', 'XZC', 'ZCL', 'ZEC', 'ZEN', 'ZRX'
]

export function getIcon(symbol) {
  if (symbols.indexOf(symbol) >= 0) {
    switch(symbol) {
      case 'ACT' : return require('../public/images/icon/act.png');
      case 'ADA' : return require('../public/images/icon/ada.png');
      case 'ADX' : return require('../public/images/icon/adx.png');
      case 'AE' : return require('../public/images/icon/ae.png');
      case 'AION' : return require('../public/images/icon/aion.png');
      case 'AMP' : return require('../public/images/icon/amp.png');
      case 'ANT' : return require('../public/images/icon/ant.png');
      case 'ARDR' : return require('../public/images/icon/ardr.png');
      case 'ARK' : return require('../public/images/icon/ark.png');
      case 'ATM' : return require('../public/images/icon/atm.png');
      case 'BAT' : return require('../public/images/icon/bat.png');
      case 'BAY' : return require('../public/images/icon/bay.png');
      case 'BCC' : return require('../public/images/icon/bcc.png');
      case 'BCH' : return require('../public/images/icon/bch.png');
      case 'BCN' : return require('../public/images/icon/bcn.png');
      case 'BDL' : return require('../public/images/icon/bdl.png');
      case 'BELA' : return require('../public/images/icon/bela.png');
      case 'BLCN' : return require('../public/images/icon/blcn.png');
      case 'BLK' : return require('../public/images/icon/blk.png');
      case 'BLOCK' : return require('../public/images/icon/block.png');
      case 'BNB' : return require('../public/images/icon/bnb.png');
      case 'BNT' : return require('../public/images/icon/bnt.png');
      case 'BQ' : return require('../public/images/icon/bq.png');
      case 'BQX' : return require('../public/images/icon/bqx.png');
      case 'BTC' : return require('../public/images/icon/btc.png');
      case 'BTCD' : return require('../public/images/icon/btcd.png');
      case 'BTCZ' : return require('../public/images/icon/btcz.png');
      case 'BTG' : return require('../public/images/icon/btg.png');
      case 'BTM' : return require('../public/images/icon/btm.png');
      case 'BTS' : return require('../public/images/icon/bts.png');
      case 'BTX' : return require('../public/images/icon/btx.png');
      case 'BURST' : return require('../public/images/icon/burst.png');
      case 'CLAM' : return require('../public/images/icon/clam.png');
      case 'CNX' : return require('../public/images/icon/cnx.png');
      case 'CNY' : return require('../public/images/icon/cny.png');
      case 'CVC' : return require('../public/images/icon/cvc.png');
      case 'DASH' : return require('../public/images/icon/dash.png');
      case 'DATA' : return require('../public/images/icon/data.png');
      case 'DBC' : return require('../public/images/icon/dbc.png');
      case 'DCN' : return require('../public/images/icon/dcn.png');
      case 'DCR' : return require('../public/images/icon/dcr.png');
      case 'DENT' : return require('../public/images/icon/dent.png');
      case 'DGB' : return require('../public/images/icon/dgb.png');
      case 'DGD' : return require('../public/images/icon/dgd.png');
      case 'DOGE' : return require('../public/images/icon/doge.png');
      case 'DRGN' : return require('../public/images/icon/drgn.png');
      case 'EDG' : return require('../public/images/icon/edg.png');
      case 'EDOGE' : return require('../public/images/icon/edoge.png');
      case 'ELF' : return require('../public/images/icon/elf.png');
      case 'EMC' : return require('../public/images/icon/emc.png');
      case 'EMC2' : return require('../public/images/icon/emc2.png');
      case 'ENG' : return require('../public/images/icon/eng.png');
      case 'EOS' : return require('../public/images/icon/eos.png');
      case 'ETC' : return require('../public/images/icon/etc.png');
      case 'ETH' : return require('../public/images/icon/eth.png');
      case 'ETHOS' : return require('../public/images/icon/ethos.png');
      case 'ETN' : return require('../public/images/icon/etn.png');
      case 'ETP' : return require('../public/images/icon/etp.png');
      case 'EUR' : return require('../public/images/icon/eur.png');
      case 'EVX' : return require('../public/images/icon/evx.png');
      case 'EXMO' : return require('../public/images/icon/exmo.png');
      case 'EXP' : return require('../public/images/icon/exp.png');
      case 'FAIR' : return require('../public/images/icon/fair.png');
      case 'FCT' : return require('../public/images/icon/fct.png');
      case 'FIL' : return require('../public/images/icon/fil.png');
      case 'FLDC' : return require('../public/images/icon/fldc.png');
      case 'FLO' : return require('../public/images/icon/flo.png');
      case 'FUN' : return require('../public/images/icon/fun.png');
      case 'GAME' : return require('../public/images/icon/game.png');
      case 'GAS' : return require('../public/images/icon/gas.png');
      case 'GBP' : return require('../public/images/icon/gbp.png');
      case 'GBX' : return require('../public/images/icon/gbx.png');
      case 'GBYTE' : return require('../public/images/icon/gbyte.png');
      case 'GNO' : return require('../public/images/icon/gno.png');
      case 'GNT' : return require('../public/images/icon/gnt.png');
      case 'GRC' : return require('../public/images/icon/grc.png');
      case 'GRS' : return require('../public/images/icon/grs.png');
      case 'GUP' : return require('../public/images/icon/gup.png');
      case 'GXS' : return require('../public/images/icon/gxs.png');
      case 'HSR' : return require('../public/images/icon/hsr.png');
      case 'HUC' : return require('../public/images/icon/huc.png');
      case 'HUSH' : return require('../public/images/icon/hush.png');
      case 'ICN' : return require('../public/images/icon/icn.png');
      case 'ICX' : return require('../public/images/icon/icx.png');
      case 'JPY' : return require('../public/images/icon/jpy.png');
      case 'KCS' : return require('../public/images/icon/kcs.png');
      case 'KIN' : return require('../public/images/icon/kin.png');
      case 'KMD' : return require('../public/images/icon/kmd.png');
      case 'KNC' : return require('../public/images/icon/knc.png');
      case 'KRB' : return require('../public/images/icon/krb.png');
      case 'LBC' : return require('../public/images/icon/lbc.png');
      case 'LINK' : return require('../public/images/icon/link.png');
      case 'LKK' : return require('../public/images/icon/lkk.png');
      case 'LRC' : return require('../public/images/icon/lrc.png');
      case 'LSK' : return require('../public/images/icon/lsk.png');
      case 'LTC' : return require('../public/images/icon/ltc.png');
      case 'MAID' : return require('../public/images/icon/maid.png');
      case 'MANA' : return require('../public/images/icon/mana.png');
      case 'MCAP' : return require('../public/images/icon/mcap.png');
      case 'MCO' : return require('../public/images/icon/mco.png');
      case 'MIOTA' : return require('../public/images/icon/miota.png');
      case 'MLN' : return require('../public/images/icon/mln.png');
      case 'MNX' : return require('../public/images/icon/mnx.png');
      case 'MONA' : return require('../public/images/icon/mona.png');
      case 'MTL' : return require('../public/images/icon/mtl.png');
      case 'MUSIC' : return require('../public/images/icon/music.png');
      case 'NAV' : return require('../public/images/icon/nav.png');
      case 'NEBL' : return require('../public/images/icon/nebl.png');
      case 'NEO' : return require('../public/images/icon/neo.png');
      case 'NEOS' : return require('../public/images/icon/neos.png');
      case 'NLC2' : return require('../public/images/icon/nlc2.png');
      case 'NLG' : return require('../public/images/icon/nlg.png');
      case 'NMC' : return require('../public/images/icon/nmc.png');
      case 'NXS' : return require('../public/images/icon/nxs.png');
      case 'NXT' : return require('../public/images/icon/nxt.png');
      case 'OMG' : return require('../public/images/icon/omg.png');
      case 'OMNI' : return require('../public/images/icon/omni.png');
      case 'PART' : return require('../public/images/icon/part.png');
      case 'PASL' : return require('../public/images/icon/pasl.png');
      case 'PAY' : return require('../public/images/icon/pay.png');
      case 'PINK' : return require('../public/images/icon/pink.png');
      case 'PIVX' : return require('../public/images/icon/pivx.png');
      case 'POE' : return require('../public/images/icon/poe.png');
      case 'POT' : return require('../public/images/icon/pot.png');
      case 'POWR' : return require('../public/images/icon/powr.png');
      case 'PPC' : return require('../public/images/icon/ppc.png');
      case 'PPT' : return require('../public/images/icon/ppt.png');
      case 'PURA' : return require('../public/images/icon/pura.png');
      case 'QASH' : return require('../public/images/icon/qash.png');
      case 'QIWI' : return require('../public/images/icon/qiwi.png');
      case 'QSP' : return require('../public/images/icon/qsp.png');
      case 'QTUM' : return require('../public/images/icon/qtum.png');
      case 'RADS' : return require('../public/images/icon/rads.png');
      case 'RCN' : return require('../public/images/icon/rcn.png');
      case 'RDD' : return require('../public/images/icon/rdd.png');
      case 'RDN' : return require('../public/images/icon/rdn.png');
      case 'REP' : return require('../public/images/icon/rep.png');
      case 'REQ' : return require('../public/images/icon/req.png');
      case 'RHOC' : return require('../public/images/icon/rhoc.png');
      case 'RIC' : return require('../public/images/icon/ric.png');
      case 'RLC' : return require('../public/images/icon/rlc.png');
      case 'RUB' : return require('../public/images/icon/rub.png');
      case 'SALT' : return require('../public/images/icon/salt.png');
      case 'SAN' : return require('../public/images/icon/san.png');
      case 'SBD' : return require('../public/images/icon/sbd.png');
      case 'SBERBANK' : return require('../public/images/icon/sberbank.png');
      case 'SC' : return require('../public/images/icon/sc.png');
      case 'SKY' : return require('../public/images/icon/sky.png');
      case 'SMART' : return require('../public/images/icon/smart.png');
      case 'SNGLS' : return require('../public/images/icon/sngls.png');
      case 'SNT' : return require('../public/images/icon/snt.png');
      case 'START' : return require('../public/images/icon/start.png');
      case 'STEEM' : return require('../public/images/icon/steem.png');
      case 'STORJ' : return require('../public/images/icon/storj.png');
      case 'STORM' : return require('../public/images/icon/storm.png');
      case 'STRAT' : return require('../public/images/icon/strat.png');
      case 'SUB' : return require('../public/images/icon/sub.png');
      case 'TAAS' : return require('../public/images/icon/taas.png');
      case 'TKN' : return require('../public/images/icon/tkn.png');
      case 'TRX' : return require('../public/images/icon/trx.png');
      case 'TZC' : return require('../public/images/icon/tzc.png');
      case 'UBQ' : return require('../public/images/icon/ubq.png');
      case 'USD' : return require('../public/images/icon/usd.png');
      case 'USDT' : return require('../public/images/icon/usdt.png');
      case 'VEN' : return require('../public/images/icon/ven.png');
      case 'VERI' : return require('../public/images/icon/veri.png');
      case 'VIA' : return require('../public/images/icon/via.png');
      case 'VIVO' : return require('../public/images/icon/vivo.png');
      case 'VRC' : return require('../public/images/icon/vrc.png');
      case 'VTC' : return require('../public/images/icon/vtc.png');
      case 'WAVES' : return require('../public/images/icon/waves.png');
      case 'WAX' : return require('../public/images/icon/wax.png');
      case 'WTC' : return require('../public/images/icon/wtc.png');
      case 'XBC' : return require('../public/images/icon/xbc.png');
      case 'XCP' : return require('../public/images/icon/xcp.png');
      case 'XDN' : return require('../public/images/icon/xdn.png');
      case 'XEM' : return require('../public/images/icon/xem.png');
      case 'XLM' : return require('../public/images/icon/xlm.png');
      case 'XMR' : return require('../public/images/icon/xmr.png');
      case 'XPM' : return require('../public/images/icon/xpm.png');
      case 'XRB' : return require('../public/images/icon/xrb.png');
      case 'XRP' : return require('../public/images/icon/xrp.png');
      case 'XTZ' : return require('../public/images/icon/xtz.png');
      case 'XUC' : return require('../public/images/icon/xuc.png');
      case 'XVC' : return require('../public/images/icon/xvc.png');
      case 'XVG' : return require('../public/images/icon/xvg.png');
      case 'XZC' : return require('../public/images/icon/xzc.png');
      case 'ZCL' : return require('../public/images/icon/zcl.png');
      case 'ZEC' : return require('../public/images/icon/zec.png');
      case 'ZEN' : return require('../public/images/icon/zen.png');
      case 'ZRX' : return require('../public/images/icon/zrx.png');
    
      default : return require('../public/images/icon/default.png');
    }
  } else {
    return require('../public/images/icon/default.png');
  }
};

