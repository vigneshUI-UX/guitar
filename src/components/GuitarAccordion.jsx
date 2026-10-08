import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { GUITARS } from '../data/guitars';

export default function GuitarAccordion() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [modalItem, setModalItem] = useState(null);

  return (
    <div style={styles.container}>
      {/* ACCORDION CONTAINER */}
      <div style={styles.accordionContainer}>
        {GUITARS.map((guitar, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={guitar.id}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              style={{
                ...styles.column,
                flex: isActive ? '3.5 1 0%' : '0.6 1 0%',
                backgroundColor: guitar.color
              }}
            >
              {/* TOP HEADER */}
              <div style={styles.columnHeader}>
                <span style={styles.columnId}>{guitar.id}</span>
                {!isActive && (
                  <span style={styles.verticalTitle}>{guitar.subtitle}</span>
                )}
              </div>

              {/* COLLAPSED COLUMN THUMBNAIL */}
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={styles.collapsedContent}
                >
                  <img
                    src={guitar.guitarImg}
                    alt={guitar.name}
                    style={styles.collapsedImage}
                  />
                </motion.div>
              )}

              {/* EXPANDED COLUMN CONTENT */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.expandedContent}
                  >
                    {/* LEFT TEXT PANEL */}
                    <div style={styles.leftPanel}>
                      <div>
                        <p style={styles.smallSubtitle}>{guitar.id}</p>
                        <h1 style={styles.title}>{guitar.name}</h1>
                        <p style={styles.artistBand}>
                          {guitar.artist} <span style={{ opacity: 0.5 }}>|</span> {guitar.band}
                        </p>
                        <p style={styles.description}>{guitar.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalItem(guitar);
                          }}
                          style={styles.learnMoreBtn}
                        >
                          Learn More <ArrowUpRight size={14} />
                        </button>
                      </div>

                      {/* MUSIC PLAYER CONTROLLER */}
                      <div style={styles.playerBar}>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          style={styles.playBtn}
                        >
                          <Play size={14} style={{ fill: '#000', marginLeft: '2px' }} />
                        </button>
                        <div>
                          <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}>
                            "{guitar.song}"
                          </p>
                          <p style={{ margin: 0, fontSize: '10px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Click to Play
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT IMAGE PANEL */}
                    <div style={styles.rightPanel}>
                      <img
                        src={guitar.artistImg}
                        alt={guitar.artist}
                        style={styles.artistImage}
                      />
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        src={guitar.guitarImg}
                        alt={guitar.name}
                        style={styles.guitarImage}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalBackdrop}
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={styles.modalCard}
            >
              <button
                onClick={() => setModalItem(null)}
                style={styles.closeBtn}
              >
                <X size={18} />
              </button>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ color: '#F59E0B', fontSize: '12px', fontWeight: 'bold' }}>
                  {modalItem.id}
                </span>
                <h2 style={{ margin: '4px 0 2px 0', fontSize: '22px', fontWeight: 'bold' }}>
                  {modalItem.name}
                </h2>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>
                  {modalItem.artist} • {modalItem.band}
                </p>
              </div>

              <div style={styles.modalGrid}>
                <div style={styles.modalImageContainer}>
                  <img src={modalItem.guitarImg} alt={modalItem.name} style={{ height: '100%', objectFit: 'contain' }} />
                </div>

                <div>
                  <h3 style={styles.specHeader}>Technical Specifications</h3>
                  <div style={styles.specGrid}>
                    <div>
                      <p style={styles.specLabel}>Body</p>
                      <p style={styles.specValue}>{modalItem.specs.body}</p>
                    </div>
                    <div>
                      <p style={styles.specLabel}>Neck</p>
                      <p style={styles.specValue}>{modalItem.specs.neck}</p>
                    </div>
                    <div>
                      <p style={styles.specLabel}>Frets</p>
                      <p style={styles.specValue}>{modalItem.specs.frets}</p>
                    </div>
                    <div>
                      <p style={styles.specLabel}>Pickups</p>
                      <p style={styles.specValue}>{modalItem.specs.pickups}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#fff',
    overflow: 'hidden',
    userSelect: 'none'
  },
  accordionContainer: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  column: {
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRight: '1px solid rgba(255, 255, 255, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  columnHeader: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10
  },
  columnId: {
    fontSize: '24px',
    fontWeight: '900',
    opacity: 0.9
  },
  verticalTitle: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    opacity: 0.75
  },
  collapsedContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '24px',
    zIndex: 10
  },
  collapsedImage: {
    height: '160px',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 10px 12px rgba(0, 0, 0, 0.6))'
  },
  expandedContent: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  leftPanel: {
    width: '50%',
    height: '100%',
    padding: '32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 10,
    background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)'
  },
  smallSubtitle: {
    margin: 0,
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '2px',
    opacity: 0.7
  },
  title: {
    margin: '4px 0 0 0',
    fontSize: '28px',
    fontWeight: '900',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    lineHeight: 1.1
  },
  artistBand: {
    margin: '8px 0 0 0',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#fbbf24',
    letterSpacing: '1px'
  },
  description: {
    marginTop: '16px',
    fontSize: '12px',
    lineHeight: 1.5,
    maxWidth: '340px',
    opacity: 0.9
  },
  learnMoreBtn: {
    marginTop: '24px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 20px',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '999px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
    textTransform: 'uppercase'
  },
  playerBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  playBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  rightPanel: {
    width: '50%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  artistImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    mixBlendMode: 'overlay',
    opacity: 0.6
  },
  guitarImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    height: '85%',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 25px 35px rgba(0,0,0,0.85))',
    zIndex: 10
  },
  modalBackdrop: {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px'
  },
  modalCard: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#171717',
    border: '1px solid #262626',
    borderRadius: '16px',
    padding: '32px',
    color: '#fff',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
  },
  closeBtn: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    color: '#a3a3a3',
    cursor: 'pointer',
    padding: '8px'
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    alignItems: 'center'
  },
  modalImageContainer: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid #262626'
  },
  specHeader: {
    fontSize: '11px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#a3a3a3',
    borderBottom: '1px solid #262626',
    paddingBottom: '6px',
    margin: '0 0 12px 0'
  },
  specGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  specLabel: {
    margin: 0,
    fontSize: '11px',
    color: '#737373'
  },
  specValue: {
    margin: '2px 0 0 0',
    fontSize: '12px',
    fontWeight: '600'
  }
};