import { Zap, Check } from 'lucide-react';
import './ProUpgrade.css';

function ProUpgrade() {
  return (
    <section className="pro-upgrade">
      <div className="container">
        <div className="pro-card">
          <div className="pro-header">
            <Zap size={40} className="pro-icon" />
            <h2>Upgrade to Pro</h2>
            <p>Unlock advanced features and boost your productivity</p>
          </div>

          <div className="pro-features">
            <div className="pro-feature">
              <Check size={20} />
              <span>Unlimited timestamps</span>
            </div>
            <div className="pro-feature">
              <Check size={20} />
              <span>Batch processing for multiple videos</span>
            </div>
            <div className="pro-feature">
              <Check size={20} />
              <span>Advanced timestamp templates</span>
            </div>
            <div className="pro-feature">
              <Check size={20} />
              <span>Priority customer support</span>
            </div>
            <div className="pro-feature">
              <Check size={20} />
              <span>Ad-free experience</span>
            </div>
            <div className="pro-feature">
              <Check size={20} />
              <span>API access for automation</span>
            </div>
          </div>

          <button className="btn-pro">
            Upgrade to Pro - Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProUpgrade;
