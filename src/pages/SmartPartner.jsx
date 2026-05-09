import React from 'react';

const ClimbLinkAlgorithmDocument = () => {
  return (
    <div className="section" style={{ padding: '2rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>
          ClimbLink Intelligent Matching Algorithm Document
        </h1>

        {/* ====================================== */}
        <h2 style={{ fontSize: 28, marginTop: '2.5rem', marginBottom: '1rem', color: '#2ECCB2', borderBottom: '2px solid #2ECCB2', paddingBottom: '0.5rem' }}>
          I. Design Background and Principles
        </h2>

        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>1.1 Design Background</h3>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>Based on user research questionnaires, the following main pain points were identified:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.8 }}>
          <li style={{ marginBottom: '0.5rem' }}>41.38% of users reported being unable to find climbing partners at the same level</li>
          <li style={{ marginBottom: '0.5rem' }}>37.93% of users reported difficulty matching time/venue, leading to low climbing appointment efficiency</li>
          <li style={{ marginBottom: '0.5rem' }}>24.14% of users worried about unreliable unfamiliar partners</li>
          <li>24.14% of users thought community information was messy, making it time-consuming to find climbing appointment information</li>
        </ul>

        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>1.2 Design Principles</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li style={{ marginBottom: '0.5rem' }}>Focus on pain points identified in user research</li>
          <li style={{ marginBottom: '0.5rem' }}>Comprehensive multi-dimensional scoring, not relying on a single standard</li>
          <li style={{ marginBottom: '0.5rem' }}>High interpretability, allowing users to understand matching reasons</li>
          <li>Easy to iterate and optimize</li>
        </ul>

        {/* ====================================== */}
        <h2 style={{ fontSize: 28, marginTop: '2.5rem', marginBottom: '1rem', color: '#2ECCB2', borderBottom: '2px solid #2ECCB2', paddingBottom: '0.5rem' }}>
          II. Overview of Scoring Dimensions and Weights
        </h2>
        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '600px' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#2ECCB2', color: 'white' }}>
                <th style={{ textAlign: 'left' }}>Dimension</th>
                <th style={{ textAlign: 'left' }}>Weight</th>
                <th style={{ textAlign: 'left' }}>Core Problem Solved</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>Climbing Level Matching</td>
                <td>35%</td>
                <td>Unable to find partners at the same level</td>
              </tr>
              <tr>
                <td>Time/Venue Matching</td>
                <td>30%</td>
                <td>Low climbing appointment efficiency</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Personality Label Matching</td>
                <td>10%</td>
                <td>Improve experience and rapport</td>
              </tr>
              <tr>
                <td>Climbing Request Tag Matching</td>
                <td>10%</td>
                <td>Matching the type of climbing for this session</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Historical Interaction Scoring</td>
                <td>10%</td>
                <td>Unreliable unfamiliar partners</td>
              </tr>
              <tr>
                <td>Shared Activity Records</td>
                <td>5%</td>
                <td>Enhance matching reliability</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Total Score Range: 0-100 points</p>

        {/* ====================================== */}
        <h2 style={{ fontSize: 28, marginTop: '2.5rem', marginBottom: '1rem', color: '#2ECCB2', borderBottom: '2px solid #2ECCB2', paddingBottom: '0.5rem' }}>
          III. Detailed Explanation of Scoring Algorithms
        </h2>

        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>3.1 Climbing Level Matching (35 points)</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Climbing Level System</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
{`Level Hierarchy Definition:
- L1: V0
- L2: V1-V2
- L3: V3-V4
- L4: V5-V6
- L5: V7-V8
- L6: V9+`}
        </pre>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Scoring Rules</p>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '700px' }} border={1} cellPadding={8}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>User A Level</th>
                <th>User B Level</th>
                <th>Score</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>L1 (V0)</td>
                <td>L1</td>
                <td>35 points</td>
                <td>Perfect match (same level)</td>
              </tr>
              <tr>
                <td>L1</td>
                <td>L2</td>
                <td>20 points</td>
                <td>Acceptable match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L1</td>
                <td>L3</td>
                <td>10 points</td>
                <td>Small gap</td>
              </tr>
              <tr>
                <td>L1</td>
                <td>L4-L6</td>
                <td>5 points</td>
                <td>Marginal match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L2 (V1-V2)</td>
                <td>L2</td>
                <td>35 points</td>
                <td>Perfect match (same level)</td>
              </tr>
              <tr>
                <td>L2</td>
                <td>L1, L3</td>
                <td>20 points</td>
                <td>Acceptable match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L2</td>
                <td>L4</td>
                <td>10 points</td>
                <td>Small gap</td>
              </tr>
              <tr>
                <td>L2</td>
                <td>L5-L6</td>
                <td>5 points</td>
                <td>Marginal match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L3 (V3-V4)</td>
                <td>L3</td>
                <td>35 points</td>
                <td>Perfect match (same level)</td>
              </tr>
              <tr>
                <td>L3</td>
                <td>L2, L4</td>
                <td>20 points</td>
                <td>Acceptable match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L3</td>
                <td>L1, L5</td>
                <td>10 points</td>
                <td>Small gap</td>
              </tr>
              <tr>
                <td>L3</td>
                <td>L6</td>
                <td>5 points</td>
                <td>Marginal match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L4 (V5-V6)</td>
                <td>L4</td>
                <td>35 points</td>
                <td>Perfect match (same level)</td>
              </tr>
              <tr>
                <td>L4</td>
                <td>L3, L5</td>
                <td>20 points</td>
                <td>Acceptable match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L4</td>
                <td>L2, L6</td>
                <td>10 points</td>
                <td>Small gap</td>
              </tr>
              <tr>
                <td>L4</td>
                <td>L1</td>
                <td>5 points</td>
                <td>Marginal match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L5 (V7-V8)</td>
                <td>L5</td>
                <td>35 points</td>
                <td>Perfect match (same level)</td>
              </tr>
              <tr>
                <td>L5</td>
                <td>L4, L6</td>
                <td>20 points</td>
                <td>Acceptable match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L5</td>
                <td>L3</td>
                <td>10 points</td>
                <td>Small gap</td>
              </tr>
              <tr>
                <td>L5</td>
                <td>L1-L2</td>
                <td>5 points</td>
                <td>Marginal match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L6 (V9+)</td>
                <td>L6</td>
                <td>35 points</td>
                <td>Perfect match (same level)</td>
              </tr>
              <tr>
                <td>L6</td>
                <td>L5</td>
                <td>20 points</td>
                <td>Acceptable match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>L6</td>
                <td>L4</td>
                <td>10 points</td>
                <td>Small gap</td>
              </tr>
              <tr>
                <td>L6</td>
                <td>L1-L3</td>
                <td>5 points</td>
                <td>Marginal match</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem' }}>Calculation Formula</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_level_score(level_a, level_b):
    level_map = {
        'V0': 1,
        'V1': 2,
        'V1-V2': 2,
        'V2': 2,
        'V0-V2 Beginner': 2,
        'V3': 3,
        'V3-V4': 3,
        'V3-V5 Intermediate': 3,
        'V4': 3,
        'V5': 4,
        'V5-V6': 4,
        'V6': 4,
        'V7': 5,
        'V7-V8': 5,
        'V8': 5,
        'V6-V8 Advanced': 5,
        'V9+': 6,
        'V9+ Expert': 6
    }
    
    l_a = level_map.get(level_a, 3)
    l_b = level_map.get(level_b, 3)
    diff = abs(l_a - l_b)
    
    if diff == 0:
        return 35
    elif diff == 1:
        return 20
    elif diff == 2:
        return 10
    else:
        return 5`}
        </pre>

        {/* ====================================== */}
        <h3 style={{ fontSize: 20, marginTop: '2rem', fontWeight: 600 }}>3.2 Time/Venue Matching (30 points)</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Scoring Rules</p>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>Matching Condition</th>
                <th>Score</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>Same Venue</td>
                <td>12 points</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Same Date</td>
                <td>10 points</td>
                <td>-</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Time Overlap ≥ 2 hours or "Any Time" selected</td>
                <td>8 points</td>
                <td>Selecting "Any Time" is equivalent to ≥ 2 hours of overlap</td>
              </tr>
              <tr>
                <td>Time Overlap 1-2 hours</td>
                <td>5 points</td>
                <td>-</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Time Overlap &lt; 1 hour</td>
                <td>3 points</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Maximum Score: 30 points</p>

        <p style={{ fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem' }}>Calculation Formula</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_time_venue_score(request, my_request=None, any_time=False):
    score = 0
    
    # Venue matching
    if my_request and my_request['venue_name'] == request['venue_name']:
        score += 12
    
    # Date matching
    if my_request and my_request['climb_date'] == request['climb_date']:
        score += 10
    
    # Time matching (if "any time" is selected, time is automatically matched for 2 hours)
    overlap = 120 if any_time else calculate_time_overlap(
        my_request['climb_time'] if my_request else None,
        request['climb_time']
    )
    if overlap >= 120:
        score += 8
    elif overlap >= 60:
        score += 5
    elif overlap > 0:
        score += 3
    
    return min(score, 30)  # Capped at 30 points

def calculate_time_overlap(my_time, req_time):
    # If any time is empty or "any time" is selected, return 2 hours as default
    if not my_time or not req_time or 'any' in str(my_time).lower() or 'any' in str(req_time).lower():
        return 120
    
    # Parse time range
    def parse_range(time_range):
        parts = str(time_range).split('-')
        if len(parts) == 2:
            return {
                'start': parse_time(parts[0]),
                'end': parse_time(parts[1])
            }
        single_time = parse_time(time_range)
        return {'start': single_time, 'end': single_time + 60}  # Assume 1 hour
    
    my_range = parse_range(my_time)
    req_range = parse_range(req_time)
    
    if not my_range['start'] or not my_range['end'] or not req_range['start'] or not req_range['end']:
        return 0
    
    overlap_start = max(my_range['start'], req_range['start'])
    overlap_end = min(my_range['end'], req_range['end'])
    
    if overlap_end > overlap_start:
        return overlap_end - overlap_start
    return 0`}
        </pre>

        {/* ====================================== */}
        <h3 style={{ fontSize: 20, marginTop: '2rem', fontWeight: 600 }}>3.3 Personality Label Matching (10 points)</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Available Personality Labels</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, fontSize: '0.95rem', lineHeight: 1.7 }}>
{`Personality Labels:
- Extrovert
- Introvert
- Adventurer
- Planner
- Competitive
- Relaxed
- Tech-focused
- Fun-focused
- Early Bird
- Night Owl
- Team Player
- Independent`}
        </pre>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Complementary Personality Label Pairs</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, fontSize: '0.95rem', lineHeight: 1.7 }}>
{`Complementary Label Pairs:
- Extrovert ↔ Introvert
- Planner ↔ Adventurer
- Competitive ↔ Relaxed
- Early Bird ↔ Night Owl`}
        </pre>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Personality Label Scoring Rules</p>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>Matching Situation</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>≥ 3 common labels</td>
                <td>10 points</td>
              </tr>
              <tr>
                <td>2 common labels</td>
                <td>8 points</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>1 common label</td>
                <td>5 points</td>
              </tr>
              <tr>
                <td>No common labels but with complementary labels</td>
                <td>4 points</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>No common labels and no complementary labels</td>
                <td>2 points</td>
              </tr>
              <tr>
                <td>User has not selected personality labels or labels are empty</td>
                <td>3 points (base score)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem' }}>Personality Label Calculation Formula</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_personality_label_score(labels_a, labels_b):
    if not labels_a or not labels_b:
        return 3
    
    labels_a = set(labels_a)
    labels_b = set(labels_b)
    
    common = labels_a & labels_b
    common_count = len(common)
    
    if common_count >= 3:
        return 10
    elif common_count == 2:
        return 8
    elif common_count == 1:
        return 5
    else:
        # Check for complementary labels
        complementary_pairs = {
            ('Extrovert', 'Introvert'),
            ('Planner', 'Adventurer'),
            ('Competitive', 'Relaxed'),
            ('Early Bird', 'Night Owl'),
        }
        for pair in complementary_pairs:
            if (pair[0] in labels_a and pair[1] in labels_b) or (pair[1] in labels_a and pair[0] in labels_b):
                return 4
        return 2`}
        </pre>

        {/* ====================================== */}
        <h3 style={{ fontSize: 20, marginTop: '2rem', fontWeight: 600 }}>3.4 Climbing Request Tag Matching (10 points)</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Available Climbing Request Tags</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, fontSize: '0.95rem', lineHeight: 1.7 }}>
{`Climbing Request Tags (Type and Intensity):
- bouldering 🧗
- ropes 🪢
- lead ⛓️
- speed ⚡
- beginner 🆕
- social 🎉
- training 💪
- project 🎯
- relaxed 😌
- intense 🔥`}
        </pre>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Climbing Request Tag Scoring Rules</p>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>Matching Situation</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>User has not selected tags or request has no tags</td>
                <td>10 points (full score)</td>
              </tr>
              <tr>
                <td>≥ 2 common tags</td>
                <td>10 points</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>1 common tag</td>
                <td>7 points</td>
              </tr>
              <tr>
                <td>No common tags but with related tags</td>
                <td>4 points</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Completely unrelated</td>
                <td>2 points</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Related Tag Groups</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, fontSize: '0.95rem', lineHeight: 1.7 }}>
{`Related Tag Groups:
- {bouldering, project}
- {ropes, lead}
- {training, intense}
- {beginner, relaxed, social}`}
        </pre>

        <p style={{ fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem' }}>Climbing Request Tag Calculation Formula</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_climb_request_label_score(tags_a, tags_b):
    if not tags_a or not tags_b or len(tags_a) == 0 or len(tags_b) == 0:
        return 10
    
    tags_a = set(tags_a)
    tags_b = set(tags_b)
    
    common = tags_a & tags_b
    common_count = len(common)
    
    if common_count >= 2:
        return 10
    elif common_count == 1:
        return 7
    else:
        # Check for related tags
        related_groups = [
            {'bouldering', 'project'},
            {'ropes', 'lead'},
            {'training', 'intense'},
            {'beginner', 'relaxed', 'social'},
        ]
        for group in related_groups:
            if (tags_a & group) and (tags_b & group):
                return 4
        return 2`}
        </pre>

        {/* ====================================== */}
        <h3 style={{ fontSize: 20, marginTop: '2rem', fontWeight: 600 }}>3.5 Historical Interaction Scoring (10 points)</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Interaction Intensity Levels</p>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>Interaction Type</th>
                <th>Score</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>Successfully climbed together</td>
                <td>10 points</td>
                <td>Highest trust level</td>
              </tr>
              <tr>
                <td>Multiple message exchanges (≥5 times)</td>
                <td>9 points</td>
                <td>High familiarity</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Had message exchanges(&lt; 5 times)</td>
                <td>7 points</td>
                <td>Had communication</td>
              </tr>
              <tr>
                <td>Received an application from the other party</td>
                <td>5 points</td>
                <td>Had a connection</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>No interaction at all</td>
                <td>3 points</td>
                <td>Base score</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem' }}>Calculation Formula</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_interaction_score(user_a, user_b):
    # Check for successful climbing records
    if has_successful_climb(user_a, user_b):
        return 10
    
    # Check number of message records
    message_count = get_message_count(user_a, user_b)
    if message_count >= 5:
        return 9
    elif message_count > 0:
        return 7
    
    # Check application records
    if has_application_between(user_a, user_b):
        return 5
    
    return 3`}
        </pre>

        {/* ====================================== */}
        <h3 style={{ fontSize: 20, marginTop: '2rem', fontWeight: 600 }}>3.6 Shared Activity Records (5 points)</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Shared Activity Determination Scoring Rules</p>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>Shared Activity Situation</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>Same venue activities ≥3 times</td>
                <td>5 points</td>
              </tr>
              <tr>
                <td>Same venue activities 1-2 times</td>
                <td>3 points</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>Activities at other venues in the same city</td>
                <td>2 points</td>
              </tr>
              <tr>
                <td>No shared venue records</td>
                <td>1 point (base score)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem' }}>Calculation Formula</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_activity_score(user_a, user_b):
    common_venues = get_common_venues(user_a, user_b)
    
    if not common_venues:
        # Check for activities at other venues in the same city
        if same_city_venues(user_a, user_b):
            return 2
        return 1
    
    max_gym_count = 0
    for venue in common_venues:
        count = min(
            get_gym_visit_count(user_a, venue),
            get_gym_visit_count(user_b, venue)
        )
        max_gym_count = max(max_gym_count, count)
    
    if max_gym_count >= 3:
        return 5
    elif max_gym_count >= 1:
        return 3
    
    return 1`}
        </pre>

        {/* ====================================== */}
        <h2 style={{ fontSize: 28, marginTop: '2.5rem', marginBottom: '1rem', color: '#2ECCB2', borderBottom: '2px solid #2ECCB2', paddingBottom: '0.5rem' }}>
          IV. Total Score Calculation and Sorting
        </h2>
        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>4.1 Total Score Formula</h3>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`def calculate_total_match_score(user_a, user_b, request_a, request_b):
    level_score = calculate_level_score(user_a['climbing_level'], user_b['climbing_level'])
    
    time_venue_score = calculate_time_venue_score(request_a, request_b)
    
    personality_label_score = calculate_personality_label_score(user_a['labels'], user_b['labels'])
    
    climb_request_label_score = calculate_climb_request_label_score(request_a['tags'], request_b['tags'])
    
    interaction_score = calculate_interaction_score(user_a['user_id'], user_b['user_id'])
    
    activity_score = calculate_activity_score(user_a['user_id'], user_b['user_id'])
    
    total = level_score + time_venue_score + personality_label_score + climb_request_label_score + interaction_score + activity_score
    
    return {
        'total': total,
        'breakdown': {
            'level': level_score,
            'time_venue': time_venue_score,
            'personality_label': personality_label_score,
            'climb_request_label': climb_request_label_score,
            'interaction': interaction_score,
            'activity': activity_score
        }
    }`}
        </pre>

        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>4.2 Sorting and Filtering Strategy</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Filtering Conditions</p>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.8 }}>
          <li style={{ marginBottom: '0.5rem' }}>Minimum total score requirement: ≥40 points</li>
          <li style={{ marginBottom: '0.5rem' }}>Level difference limit: maximum difference of 2 levels</li>
          <li>Exclude yourself: cannot match your own request</li>
        </ol>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Sorting Priority</p>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, fontSize: '0.95rem', lineHeight: 1.7 }}>
{`sorted_requests = sorted(match_results, 
                         key=lambda x: (-x['score']['total'],
                                       -x['score']['breakdown']['level'],
                                       -x['score']['breakdown']['time_venue']))`}
        </pre>

        <p style={{ fontWeight: 600, marginBottom: '0.5rem', marginTop: '1rem' }}>Display Quantity</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li style={{ marginBottom: '0.5rem' }}>Recommended display of 8-10 best matches</li>
          <li>Maximum no more than 15</li>
        </ul>

        {/* ====================================== */}
        <h2 style={{ fontSize: 28, marginTop: '2.5rem', marginBottom: '1rem', color: '#2ECCB2', borderBottom: '2px solid #2ECCB2', paddingBottom: '0.5rem' }}>
          V. Matching Reason Display Design
        </h2>
        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>5.1 Matching Level Classification</h3>
        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1} cellPadding={10}>
            <thead>
              <tr style={{ background: '#66D3FA', color: 'white' }}>
                <th>Total Score Range</th>
                <th>Matching Level</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0fffc' }}>
                <td>80-100 points</td>
                <td>Highly Matched</td>
              </tr>
              <tr>
                <td>55-79 points</td>
                <td>Good Match</td>
              </tr>
              <tr style={{ background: '#f0fffc' }}>
                <td>40-54 points</td>
                <td>Decent Match</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: 20, marginTop: '1.5rem', fontWeight: 600 }}>5.2 Matching Reason Copy Library</h3>
        <pre style={{ background: '#f6f8fa', padding: '1.2rem', borderRadius: 8, overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
{`const MATCH_REASONS = {
    level_perfect: 'Same level, perfect partner',
    level_good: 'Similar level, can learn from each other',
    venue_same: 'Same venue, convenient to make an appointment for climbing',
    date_same: 'Same date',
    time_overlap: 'Time matches perfectly',
    personality_label_complementary: 'Complementary personalities, pleasant cooperation',
    personality_label_similar: 'Similar personalities, high tacit understanding',
    climb_request_label_match: 'Matching climbing type',
    climb_request_label_related: 'Related climbing types',
    had_climb: 'Have climbed together before, old friend',
    common_venue: 'Both are regulars at this venue',
    multi_highlights: 'Multiple advantages matching'
}`}
        </pre>
      </div>
    </div>
  );
};

export default ClimbLinkAlgorithmDocument;
